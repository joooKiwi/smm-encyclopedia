import type {PossibleEnglishName} from '../entity/category/EntityCategories.types';
import type {SingleTableContent}  from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityCategories}              from '../entity/category/EntityCategories';
import {EntityCategory}                from '../entity/category/EntityCategory';
import {EntityCategoryLoader}          from '../entity/category/EntityCategory.loader';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, EntityCategory>;

    protected get map() {
        return this.#map ??= EntityCategoryLoader.get.load();
    }

    protected get enum() {
        return EntityCategories.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, category,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <NameComponent id="name" name={category} popoverOrientation="left"/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="entityCategory-table"
            caption={<GameContentTranslationComponent translationKey="Every entity categories"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}
