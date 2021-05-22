import './EveryThemesApp.scss';

import {useTranslation} from 'react-i18next';
import React            from 'react';

import AbstractApp                 from './AbstractApp';
import {EntityCategory}            from '../entity/category/EntityCategory';
import {EntityCategoryLoader}      from '../entity/category/EntityCategoryLoader';
import {SMM2NameComponent}         from '../entity/lang/SMM2NameComponent';
import Table, {SingleTableContent} from './tools/Table';
import {Themes}                    from '../entity/theme/Themes';

export class EveryEntityCategoriesApp
    extends AbstractApp {

    #entityCategories?: Map<string, EntityCategory>;

    protected get map() {
        return this.#entityCategories ?? (this.#entityCategories = EntityCategoryLoader.get.load());
    }

    protected get enum() {
        return Themes.values;
    }

    protected _displayTableContent(): JSX.Element {
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
        return <TableFromEntityCategory content={content}/>;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.
        return <>{this._displayTableContent()}</>;
    }

}

function TableFromEntityCategory(props: { content: readonly SingleTableContent[] }): JSX.Element {
    const content_t = useTranslation('content').t;
    // const gameContent_t = useTranslation('game').t;

    return <Table
        id="entityCategory_table"
        caption=""
        // caption={gameContent_t('')}
        headers={[
            '#',
            content_t('Language'),
        ]}
        content={props.content}/>;
}