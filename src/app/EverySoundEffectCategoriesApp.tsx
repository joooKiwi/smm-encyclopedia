import type {SoundEffectCategory}                      from '../entity/soundEffect/category/SoundEffectCategory';
import type {SingleTableContent}                       from './tools/table/Table.types';
import type {PossibleSoundEffectCategoriesEnglishName} from '../entity/soundEffect/category/SoundEffectCategories.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';
import {SoundEffectCategories}         from '../entity/soundEffect/category/SoundEffectCategories';
import {SoundEffectCategoryLoader}     from '../entity/soundEffect/category/SoundEffectCategory.loader';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EverySoundEffectCategoriesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>;

    protected get map() {
        return this.#map ??= SoundEffectCategoryLoader.get.load();
    }

    protected get enum() {
        return SoundEffectCategories.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const [englishName, soundEffectCategory,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="soundEffectCategory_name" name={soundEffectCategory} popoverOrientation="left"/>
            ]);
            index++;
        }

        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="soundEffectCategory_table"
            caption={<GameContentTranslationComponent translationKey="Every sound effect categories"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}