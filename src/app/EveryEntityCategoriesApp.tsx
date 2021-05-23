import './EveryThemesApp.scss';
import React from 'react';

import AbstractApp            from './AbstractApp';
import {EntityCategory}       from '../entity/category/EntityCategory';
import {EntityCategoryLoader} from '../entity/category/EntityCategoryLoader';
import SMM2NameComponent      from '../entity/lang/SMM2NameComponent';
import TableWithTranslations  from './tools/table/TableWithTranslations';
import {Themes}               from '../entity/theme/Themes';
import {SingleTableContent}   from './tools/table/Table';

export class EveryEntityCategoriesApp
    extends AbstractApp {

    #entityCategories?: Map<string, EntityCategory>;

    protected get map() {
        return this.#entityCategories ?? (this.#entityCategories = EntityCategoryLoader.get.load());
    }

    protected get enum() {
        return Themes.values;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.

        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, category] of this.map.entries()) {
            const name = category.name;
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="theme_name" name={name} popoverOrientation="left"/>,
            ]);
            index++;
        }

        return <TableWithTranslations renderCallback={translations => ({
            id: 'entityCategory_table',
            caption: translations.gameContentTranslation('Every entity categories'),
            headers: [
                '#',
                translations.contentTranslation('Language'),
            ],
            content: content,
        })}/>;
    }

}
