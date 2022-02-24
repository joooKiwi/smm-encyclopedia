import './EverySoundEffectsApp.scss';
import type {PossibleEnglishName as PossibleEnglishName_Category} from '../core/soundEffectCategory/SoundEffectCategories.types';
import type {SoundEffect}                                         from '../core/soundEffect/SoundEffect';
import type {SoundEffectAppStates}                                from './AppStates.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../core/game/Games';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import {EmptyStringName}               from '../lang/name/EmptyStringName';
import NameComponent                   from '../lang/name/component/Name.component';
import {SingleTableContent}            from './tools/table/Table.types';
import {SoundEffects}                  from '../core/soundEffect/SoundEffects';
import Table                           from './tools/table/Table';
import Image                           from './tools/images/Image';
import {SoundEffectCategories}         from '../core/soundEffectCategory/SoundEffectCategories';
import SoundEffectComponent            from '../core/soundEffect/SoundEffect.component';

/**
 * @reactComponent
 */
export default class EverySoundEffectsApp
    extends AbstractApp<{}, SoundEffectAppStates> {

    //region -------------------- Attributes & getter methods --------------------

    public constructor(props: {},) {
        super(props,);
        this.state = {display: {asText: {category: false,},},};
    }

    protected get _displayCategoryAsText(): boolean {
        return this.state.display.asText.category;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private __createCategoryComponent(index: number, soundEffect: SoundEffect,) {
        const categoryName = soundEffect.categoryNameContainer;
        if (categoryName === EmptyStringName.get)
            return EMPTY_REACT_ELEMENT;

        if (this._displayCategoryAsText)
            return <NameComponent id={`${index}_soundEffectCategory-name`} name={categoryName} popoverOrientation="right"/>;

        const categoryEnglishName = categoryName.english as PossibleEnglishName_Category;
        return <Image source={SoundEffectCategories.getValue(categoryEnglishName)!.imagePath} fallbackName={`${categoryEnglishName} - image`}/>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const enumerable of SoundEffects) {
            const soundEffect = enumerable.reference;

            content.push([enumerable.englishName,
                <>{index}</>,
                soundEffect.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={soundEffect} game={Games.SUPER_MARIO_MAKER_1}/> : EMPTY_REACT_ELEMENT,
                soundEffect.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={soundEffect} game={Games.SUPER_MARIO_MAKER_2}/> : EMPTY_REACT_ELEMENT,
                <NameComponent id="name" name={soundEffect} popoverOrientation="right"/>,
                this.__createCategoryComponent(index, soundEffect,),
                <>--{soundEffect.translationKey}--</>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="soundEffect-table"
            caption={<GameContentTranslationComponent translationKey="Every sound effects"/>}
            headers={[
                {key: 'originalOrder', element: <>#</>,},
                {
                    key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                    subHeaders: [
                        {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                        {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                    ],
                },
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
                {key: 'player behaviour', element: <>--Player behaviour--</>/*<GameContentTranslationComponent translationKey="Player behaviour"/>*/,},
            ]}
            content={this.content}
        />;
    }

}
