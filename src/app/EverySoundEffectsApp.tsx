import './EverySoundEffectsApp.scss';

import type {PossibleEnglishName}                                 from '../entity/soundEffect/simple/SoundEffects.types';
import type {PossibleEnglishName as PossibleEnglishName_Category} from '../entity/soundEffect/category/SoundEffectCategories.types';
import type {SoundEffect}                                         from '../entity/soundEffect/simple/SoundEffect';
import type {SoundEffectAppStates}                                from './AppStates.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import {EmptyName}                     from '../lang/name/EmptyName';
import NameComponent                   from '../lang/name/component/Name.component';
import {SingleTableContent}            from './tools/table/Table.types';
import {SoundEffectLoader}             from '../entity/soundEffect/simple/SoundEffect.loader';
import {SoundEffects}                  from '../entity/soundEffect/simple/SoundEffects';
import Table                           from './tools/table/Table';
import {ProjectLanguages}              from '../lang/ProjectLanguages';
import Image                           from './tools/images/Image';
import {SoundEffectCategories}         from '../entity/soundEffect/category/SoundEffectCategories';
import SoundEffectComponent            from '../entity/soundEffect/simple/SoundEffect.component';

/**
 * @reactComponent
 */
export default class EverySoundEffectsApp
    extends AbstractApp<{}, SoundEffectAppStates> {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, SoundEffect>;

    public constructor(props: {}, context: any,) {
        super(props, context);
        this.state = {displayCategoryAsText: false,};
    }

    protected get map() {
        return this.#map ??= SoundEffectLoader.get.load();
    }

    protected get enum() {
        return SoundEffects.values;
    }

    protected get _displayCategoryAsText(): boolean {
        return this.state.displayCategoryAsText;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private __createCategoryComponent(index: number, soundEffect: SoundEffect,) {
        const categoryName = soundEffect.categoryName;
        if (categoryName === EmptyName.get)
            return EMPTY_REACT_ELEMENT;

        if (this._displayCategoryAsText)
            return <NameComponent id={`${index}_soundEffectCategory-name`} name={categoryName} popoverOrientation="right"/>;

        const categoryEnglishName = ProjectLanguages.getEnglish(categoryName) as PossibleEnglishName_Category;
        return <Image source={SoundEffectCategories.getValue(categoryEnglishName)!.imagePath} fallbackName={`${categoryEnglishName} - image`}/>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const [englishName, soundEffect,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                soundEffect.isInSuperMarioMaker1 ? <SoundEffectComponent reference={this.enum[index - 1]} name={soundEffect} game={Games.SUPER_MARIO_MAKER_1}/> : EMPTY_REACT_ELEMENT,
                soundEffect.isInSuperMarioMaker2 ? <SoundEffectComponent reference={this.enum[index - 1]} name={soundEffect} game={Games.SUPER_MARIO_MAKER_2}/> : EMPTY_REACT_ELEMENT,
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
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'game', width: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'category', height: 2, element: <GameContentTranslationComponent translationKey="Category"/>,},
                    {key: 'player behaviour', height: 2, element: <>--Player behaviour--</>/*<GameContentTranslationComponent translationKey="Player behaviour"/>*/,},
                ],
                [
                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            ]}
            content={this.content}
        />;
    }

}
