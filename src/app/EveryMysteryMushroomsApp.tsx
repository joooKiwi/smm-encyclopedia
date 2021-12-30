import './EveryMysteryMushroomsApp.scss';

import {Fragment} from 'react';

import type {MysteryMushroom}                                  from '../core/mysteryMushroom/MysteryMushroom';
import type {UniqueEnglishName}                                from '../core/mysteryMushroom/MysteryMushrooms.types';
import type {MysteryMushroomAppStates, PossibleImageAnimation} from './AppStates.types';
import type {SingleTableContent}                               from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import AnimatedImages                  from './tools/images/AnimatedImages';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {MysteryMushroomLoader}         from '../core/mysteryMushroom/MysteryMushroom.loader';
import {MysteryMushrooms}              from '../core/mysteryMushroom/MysteryMushrooms';
import {ProjectLanguages}              from '../lang/ProjectLanguages';
import Table                           from './tools/table/Table';
import TextComponent                   from './tools/text/TextComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import SimpleSound                     from './tools/sounds/SimpleSound';
import {StringContainer}               from '../util/StringContainer';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';
import {ImageProperties}               from './tools/images/properties/ImageProperties';

/**
 * @reactComponent
 */
export default class EveryMysteryMushroomsApp
    extends AbstractApp<{}, MysteryMushroomAppStates> {

    //region -------------------- Attributes & getter methods --------------------

    //region -------------------- Attributes --------------------

    #map?: ReadonlyMap<UniqueEnglishName, MysteryMushroom>;
    static readonly #NOT_APPLICABLE_COMPONENT = <TextComponent content="N/A"/>;

    //endregion -------------------- Attributes --------------------

    public constructor(props: {},) {
        super(props,);
        this.state = {
            display: {
                imageAnimations: true,
            },
        };
    }

    //region -------------------- Getter methods --------------------

    protected get map() {
        return this.#map ??= MysteryMushroomLoader.get.load();
    }

    protected get enum() {
        return MysteryMushrooms.values;
    }


    protected get _displayImageAnimations(): PossibleImageAnimation {
        return this.state.display.imageAnimations;
    }

    //endregion -------------------- Getter methods --------------------

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * <p>
     *  Create a single image of an animated image.
     *  It can depend on the images are just an empty arrays
     *  or just an array of strings.
     * </p>
     *
     * <p>
     *  If the images are only as <b>[string][]</b> or as <b>string[]</b>,
     *  then only a single image is returned.
     * </p>
     * <p>
     *  Otherwise, it will return an animated image is returned,
     *  and it's expected to be as <b>string[][]</b>
     * </p>
     *
     * @param images the images
     * @param englishName the english name of the {@link MysteryMushroom}
     * @param type the possible type of the {@link MysteryMushroom} as a property in the {@link SoundProperty}
     * @private
     */
    private static __createImages(images: PossibleGroupImages, englishName: string, type: string,) {
        if (images.length === 0 || images[0].length === 0)
            return this.#NOT_APPLICABLE_COMPONENT;

        const fallbackName = `${englishName} (${type})`;

        if (typeof images[0] == 'string')
            return (images as PossibleGroupImages<string>).map((image, index,) =>
                <Image key={`${fallbackName} - ${index + 1}`} source={image} fallbackName={`${fallbackName} - ${index + 1}`}/>);

        const imagesFormattedAsGroup = [...images as PossibleGroupImages<PossibleImages_Array>]
            .reduce((newArray, subImages,) => {
                subImages.forEach((value, index) => newArray[index].push(value));
                return newArray;
            }, images.map(() => [] as string[]),)
            .filter(images => images.length !== 0);

        if (imagesFormattedAsGroup[0].length === 1)
            return imagesFormattedAsGroup.map(([image,], index) =>
                <Image key={`${fallbackName} - ${index + 1}`} source={image} fallbackName={fallbackName}/>);

        const id = StringContainer.getInHtml(englishName);
        return imagesFormattedAsGroup.map((images, index,) =>
            <AnimatedImages key={`${fallbackName} - ${index + 1}`} partialId={`${id}-${index + 1}`}
                            images={images.map<ImageProperties>((image, index,) => ({source: image, fallbackName: `${fallbackName}-${index + 1}`,}))}/>);
    }

    private static __createSounds(sounds: PossibleSounds, englishName: string, type: string,) {
        if (sounds.length === 0)
            return EMPTY_REACT_ELEMENT;

        const [sound1, sound2,] = sounds;
        return <>
            <SimpleSound source={sound1} title={`${englishName} - ${type}`}/>
            {sound2 == null ? EMPTY_REACT_ELEMENT : <SimpleSound source={sound2} title={`${englishName} 2 - ${type}`}/>}
        </>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, mysteryMushroom,] of this.map.entries()) {
            const englishNameAsId = englishName.toLowerCase().replace(' ', '_');
            const mysteryMushroomEnum = MysteryMushrooms.getValue(englishName);
            const isMysteryMushroom = MysteryMushrooms.MYSTERY_MUSHROOM === mysteryMushroomEnum;

            content.push([englishName,
                <>{index}</>,
                <>--{mysteryMushroom.conditionToUnlockIt}--</>,
                <YesOrNoResultTextComponent boolean={mysteryMushroom.canBeUnlockedByAnAmiibo}/>,
                <div key={`games - ${englishName}`} id={`games_${englishNameAsId}`}>{
                    mysteryMushroom.games.map((game, index, games,) => <Fragment key={`game (${index + 1}) - ${englishName}`}>
                        <NameComponent id={`game_${index + 1}_${englishNameAsId}`} name={game.reference} popoverOrientation="right"/>
                        {index === games.length - 1 ? EMPTY_REACT_ELEMENT : <>{ProjectLanguages.currentLanguage.comma}<br/></>}
                    </Fragment>)}</div>,
                <NameComponent id={`name_${englishNameAsId}`} name={mysteryMushroom} popoverOrientation="right"/>,
                <div key={`${englishName} - power-up collected`}>{isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT
                    : EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.powerUpCollectedSounds, englishName, 'power-up collected',)
                }</div>,
                <div key={`${englishName} - waiting`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.waitingImages, englishName, 'waiting',)}</div>,
                <div key={`${englishName} - taunt`}>
                    {EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.tauntImages, englishName, 'taunt',)}
                    {EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.tauntSounds, englishName, 'taunt',)}
                </div>,
                <div key={`${englishName} - lost a life`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.downImages, englishName, 'pressing ↓',)}</div>,
                <div key={`${englishName} - walking`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.walkImages, englishName, 'walk',)}</div>,
                <div key={`${englishName} - running`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.runningImages, englishName, 'running',)}</div>,
                <div key={`${englishName} - swimming`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.swimmingImages, englishName, 'swimming',)}</div>,
                <div key={`${englishName} - jumping`}>
                    {EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.jumpImages, englishName, 'jump',)}
                    {EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.jumpSounds, englishName, 'jump',)}
                </div>,
                <div key={`${englishName} - falling after jump`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.fallingAfterJumpImages, englishName, 'falling after jump',)}</div>,
                <div key={`${englishName} - ground after jump`}>{isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT
                    : EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.onGroundAfterJumpSounds, englishName, 'ground after jump',)
                }</div>,
                <div key={`${englishName} - turning`}>
                    {EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.turningImages, englishName, 'turning',)}
                    {EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.turningSounds, englishName, 'turning',)}</div>,
                <div key={`${englishName} - climbing`}>{EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.climbingImages, englishName, 'climbing',)}</div>,
                <div key={`${englishName} - goal pole`}>
                    {EveryMysteryMushroomsApp.__createImages(mysteryMushroomEnum.goalPoleImages, englishName, 'goal pole',)}
                    {EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.goalPoleSounds, englishName, 'goal pole',)}
                </div>,
                <div key={`${englishName} - death`}>{isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT
                    : EveryMysteryMushroomsApp.__createSounds(mysteryMushroomEnum.lostALifeSounds, englishName, 'lost a life',)
                }</div>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="mysteryMushroom-table"
            caption={<GameContentTranslationComponent>{translation => translation('Every Mystery Mushrooms', {pluralName: 'Mystery Mushrooms'})}</GameContentTranslationComponent>}
            headers={[
                {key: 'originalOrder', element: <>#</>,},
                {key: 'conditionToUnlockIt', element: <>--Condition to unlock it--</>,},
                {
                    key: 'canBeUnlockedByAnAmiibo',
                    // @ts-ignore
                    element: <Image source="/others/Amiibo (short).svg" fallbackName="Amiibo icon"/>, tooltip: {translationKey: '--Can be unlocked by an Amiibo--', namespace: 'gameContent',},
                },
                {key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {
                    key: 'imagesAndSounds', element: <>--Images & sounds--</>,
                    subHeaders: [
                        {key: 'powerUpCollectedSound', element: <>--Power-up collected (sound)--</>,},
                        {key: 'waitingImage', element: <>--Waiting (image)--</>,},
                        {key: 'tauntImageAndSound', element: <>--Taunt (image & sound)--</>,},
                        {key: 'pressingDownImage', element: <>--Pressing ↓ (image)--</>,},
                        {key: 'walkImages', element: <>--Walk (image)--</>,},
                        {key: 'runningImages', element: <>--Running (images)--</>,},
                        {key: 'swimmingImages', element: <>--Swimming (images)--</>,},
                        {key: 'jumpingImagesAndSounds', element: <>--Jumping (images & sounds)--</>,},
                        {key: 'fallingAfterJumpImage', element: <>--Falling after jump (images)--</>,},
                        {key: 'groundAfterJumpImage', element: <>--Ground after jump (sound)--</>,},
                        {key: 'turningImageAndSound', element: <>-Turning (image & sound)--</>,},
                        {key: 'climbingImages', element: <>-Climbing (images)--</>,},
                        {key: 'goalPoleImagesAndSound', element: <>-Goal pole (images & sound)--</>,},
                        {key: 'lostALifeSound', element: <>-Lost a life (sound)--</>,},
                    ],
                },
            ]}
            content={this.content}
        />;
    }

}

type PossibleGroupImages<T extends | PossibleImages_Array | string = | PossibleImages_Array | string> =
    | readonly []
    | readonly [T,]
    | readonly [T, T,]
    | readonly [T, T, T,]
    | readonly [T, T, T, T, T, T,];
type PossibleImages_Array = | readonly []
                            | PossibleImages_NotEmptyArray;
type PossibleImages_NotEmptyArray = | readonly [string,]
                                    | readonly [string, string,];

type PossibleSounds = | readonly []
                      | readonly [string,]
                      | readonly [string, string,];
