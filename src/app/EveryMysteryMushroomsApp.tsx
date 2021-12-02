import './EveryMysteryMushroomsApp.scss';

import {Fragment} from 'react';

import type {ImageProperties}    from './tools/images/properties/ImageProperties';
import type {MysteryMushroom}    from '../core/mysteryMushrooms/MysteryMushroom';
import type {UniqueEnglishName}  from '../core/mysteryMushrooms/MysteryMushrooms.types';
import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import AnimatedImages                  from './tools/images/AnimatedImages';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {MysteryMushroomLoader}         from '../core/mysteryMushrooms/MysteryMushroom.loader';
import {MysteryMushrooms}              from '../core/mysteryMushrooms/MysteryMushrooms';
import {ProjectLanguages}              from '../lang/ProjectLanguages';
import Table                           from './tools/table/Table';
import TextComponent                   from './tools/text/TextComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import SimpleSound                     from './tools/sounds/SimpleSound';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryMysteryMushroomsApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<UniqueEnglishName, MysteryMushroom>;
    static readonly #NOT_APPLICABLE_COMPONENT = <TextComponent content="N/A"/>;

    protected get map() {
        return this.#map ??= MysteryMushroomLoader.get.load();
    }

    protected get enum() {
        return MysteryMushrooms.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private static __createImages<T extends SingleImage, >([hasJPSprite, hasLeftSprite,]: readonly [hasJPSprite: boolean, hasLeftSprite: boolean,], [regularImage, japaneseImage, leftVariationImage,]: PossibleImages<T>, englishName: string, type: string,) {
        const alternativeName = `${englishName} (${type})`;
        const japaneseAlternativeName = `JP ${englishName} (${type})`;
        const leftAlternativeName = `← ${englishName} (${type})`;
        const id = englishName.replace(' ', '_').toLowerCase();


        if (typeof regularImage == 'string')
            return <>
                <Image source={regularImage} fallbackName={alternativeName}/>
                {hasJPSprite ? <Image source={japaneseImage as string} fallbackName={japaneseAlternativeName}/> : EMPTY_REACT_ELEMENT}
                {hasLeftSprite ? <Image source={leftVariationImage as string} fallbackName={leftAlternativeName}/> : EMPTY_REACT_ELEMENT}
            </>;

        return <>
            <AnimatedImages partialId={id} images={regularImage.map<ImageProperties>(regularImage => ({source: regularImage, fallbackName: alternativeName,}))}/>
            {hasJPSprite
                ? <AnimatedImages partialId={`${id}_japanese`} images={(japaneseImage as unknown as string[]).map<ImageProperties>(regularImage =>
                    ({source: regularImage, fallbackName: japaneseAlternativeName,}))}/>
                : EMPTY_REACT_ELEMENT}
            {hasLeftSprite
                ? <AnimatedImages partialId={`${id}_left`} images={(leftVariationImage as unknown as string[]).map<ImageProperties>(regularImage =>
                    ({source: regularImage, fallbackName: leftAlternativeName,}))}/>
                : EMPTY_REACT_ELEMENT}
        </>;
    }

    private static __createSounds([sound1, sound2,]: readonly [string, string?,], englishName: string, type: string,) {
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
            const haveOtherSprites = [mysteryMushroom.haveADifferentJapaneseSprite, mysteryMushroom.haveADifferentLeftSprite,] as const;

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
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - power-up collected`}>{
                    mysteryMushroom.haveASoundEffectWhenCollected === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.powerUpCollectedSound], englishName, 'power-up collected',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - waiting`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs1>(haveOtherSprites, [mysteryMushroomEnum.waitingImage, mysteryMushroomEnum.japaneseWaitingImage, mysteryMushroomEnum.leftVariationWaitingImage,], englishName, 'waiting',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - taunt`}>
                    {EveryMysteryMushroomsApp.__createImages<SingleImageAs1>(haveOtherSprites, [mysteryMushroomEnum.tauntImage, mysteryMushroomEnum.japaneseTauntImage, mysteryMushroomEnum.leftVariationTauntImage,], englishName, 'taunt',)}
                    {mysteryMushroom.haveASoundEffectOnTaunt === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.tauntSound], englishName, 'taunt',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - lost a life`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs1>(haveOtherSprites, [mysteryMushroomEnum.downImage, mysteryMushroomEnum.japaneseDownImage, mysteryMushroomEnum.leftVariationDownImage,], englishName, 'pressing ↓',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - walking`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs3>(haveOtherSprites, [mysteryMushroomEnum.walkImages, mysteryMushroomEnum.japaneseWalkImages, mysteryMushroomEnum.leftVariationWalkImages,], englishName, 'walk',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - running`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs3>(haveOtherSprites, [mysteryMushroomEnum.runningImage, mysteryMushroomEnum.japaneseRunningImages, mysteryMushroomEnum.leftVariationRunningImages,], englishName, 'running',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - swimming`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs6>(haveOtherSprites, [mysteryMushroomEnum.swimmingImages, mysteryMushroomEnum.japaneseSwimmingImages, mysteryMushroomEnum.leftVariationSwimmingImages,], englishName, 'swimming',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - jumping`}>
                    {EveryMysteryMushroomsApp.__createImages<| SingleImageAs1 | SingleImageAs3>(haveOtherSprites, mysteryMushroom.haveMultipleImagesOnJump ? [mysteryMushroomEnum.jumpImages, mysteryMushroomEnum.japaneseJumpImages, mysteryMushroomEnum.leftVariationJumpImages,] : [mysteryMushroomEnum.jumpImage, mysteryMushroomEnum.japaneseTauntImage, mysteryMushroomEnum.leftVariationTauntImage,], englishName, 'jump',)}
                    {mysteryMushroom.haveASoundEffectOnJump === true ? EveryMysteryMushroomsApp.__createSounds(mysteryMushroom.amountOnSoundEffectOnJump === 2 ? mysteryMushroomEnum.jumpSounds : [mysteryMushroomEnum.jumpSounds[0]], englishName, 'jump',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - falling after jump`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs1>(haveOtherSprites, [mysteryMushroomEnum.fallingAfterJumpImage, mysteryMushroomEnum.japaneseFallingAfterJumpImage, mysteryMushroomEnum.leftVariationFallingAfterJumpImage,], englishName, 'falling after jump',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - ground after jump`}>{
                    mysteryMushroom.haveASoundEffectOnGroundAfterJump === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.onGroundAfterJumpSound], englishName, 'ground after jump',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - turning`}>
                    {EveryMysteryMushroomsApp.__createImages<SingleImageAs1>(haveOtherSprites, [mysteryMushroomEnum.turningImage, mysteryMushroomEnum.japaneseTurningImage, mysteryMushroomEnum.leftVariationTurningImage,], englishName, 'turning',)}
                    {mysteryMushroom.haveASoundEffectOnTurnAfterRun === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.turningSound,], englishName, 'turning',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - climbing`}>{
                    EveryMysteryMushroomsApp.__createImages<SingleImageAs2>(haveOtherSprites, [mysteryMushroomEnum.climbingImages, mysteryMushroomEnum.japaneseClimbingImages, mysteryMushroomEnum.leftVariationClimbingImages,], englishName, 'climbing',)}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - goal pole`}>
                    {EveryMysteryMushroomsApp.__createImages<SingleImageAs2>(haveOtherSprites, [mysteryMushroomEnum.goalPoleImages, mysteryMushroomEnum.japaneseGoalPoleImages, mysteryMushroomEnum.leftVariationGoalPoleImages,], englishName, 'goal pole',)}
                    {mysteryMushroom.haveASoundEffectOnGoalPole === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.goalPoleSound], englishName, 'goal pole',) : EMPTY_REACT_ELEMENT}</div>,
                isMysteryMushroom ? EveryMysteryMushroomsApp.#NOT_APPLICABLE_COMPONENT : <div key={`${englishName} - death`}>{
                    mysteryMushroom.haveASoundEffectOnDeath === true ? EveryMysteryMushroomsApp.__createSounds([mysteryMushroomEnum.lostALifeSound,], englishName, 'lost a life',) : EMPTY_REACT_ELEMENT}</div>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="mysteryMushroom_table"
            caption={<GameContentTranslationComponent>{translation => translation('Every Mystery Mushrooms', {pluralName: 'Mystery Mushrooms'})}</GameContentTranslationComponent>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'conditionToUnlockIt', height: 2, element: <>--Condition to unlock it--</>,},
                    {
                        key: 'canBeUnlockedByAnAmiibo', height: 2,
                        // @ts-ignore
                        element: <Image source="/others/Amiibo (short).svg" fallbackName="Amiibo icon"/>, tooltip: {translationKey: '--Can be unlocked by an Amiibo--', namespace: 'gameContent',},
                    },
                    {key: 'game', height: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'imagesAndSounds', width: 14, element: <>--Images & sounds--</>,},
                ],
                [

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
            ]}
            content={this.content}
        />;
    }

}

type SingleImageAs1 = string;
type SingleImageAs2 = readonly [string, string,];
type SingleImageAs3 = readonly [string, string, string,];
type SingleImageAs6 = readonly [string, string, string, string, string, string,];
type SingleImage = | SingleImageAs1 | SingleImageAs2 | SingleImageAs3 | SingleImageAs6;
type PossibleImages<T extends SingleImage, > = readonly [T, T, T,];
