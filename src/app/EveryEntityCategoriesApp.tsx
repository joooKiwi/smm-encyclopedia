import './EveryThemesApp.scss';

import React from 'react';

import type {SingleTableContent} from './tools/table/Table';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityCategories}              from '../entity/category/EntityCategories';
import {EntityCategory}                from '../entity/category/EntityCategory';
import {EntityCategoryLoader}          from '../entity/category/EntityCategoryLoader';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';
import Table                           from './tools/table/Table';

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

    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id='entityCategory_table'
            caption={<GameContentTranslationComponent renderCallback={translation => translation('Every entity categories')}/>}
            headers={ [
                '#',
                {key: 'language', element: <ContentTranslationComponent renderCallback={translation => translation('Language')}/>,},
            ]}
            content={this.content}
        />;
    }

}
