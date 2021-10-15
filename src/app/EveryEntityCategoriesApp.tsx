import './EveryThemesApp.scss';

import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityCategories}              from '../entity/category/EntityCategories';
import {EntityCategory}                from '../entity/category/EntityCategory';
import {EntityCategoryLoader}          from '../entity/category/EntityCategory.loader';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractApp {

    #entityCategories?: Map<string, EntityCategory>;

    protected get map() {
        return this.#entityCategories ??= EntityCategoryLoader.get.load();
    }

    protected get enum() {
        return EntityCategories.values;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, category,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="theme_name" name={category} popoverOrientation="left"/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="entityCategory_table"
            caption={<GameContentTranslationComponent translationKey="Every entity categories"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}
