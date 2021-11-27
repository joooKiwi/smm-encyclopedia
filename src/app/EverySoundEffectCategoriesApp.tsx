import type {SoundEffectCategory} from '../entity/soundEffect/category/SoundEffectCategory';
import type {SingleTableContent}  from './tools/table/Table.types';
import type {PossibleEnglishName} from '../entity/soundEffect/category/SoundEffectCategories.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/Name.component';
import {SoundEffectCategories}         from '../entity/soundEffect/category/SoundEffectCategories';
import {SoundEffectCategoryLoader}     from '../entity/soundEffect/category/SoundEffectCategory.loader';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EverySoundEffectCategoriesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, SoundEffectCategory>;

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
                <NameComponent id="name" name={soundEffectCategory} popoverOrientation="left"/>
            ]);
            index++;
        }

        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="soundEffectCategory-table"
            caption={<GameContentTranslationComponent translationKey="Every sound effect categories"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}
