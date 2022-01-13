import type {PossibleEnglishName} from '../core/entityCategory/EntityCategories.types';
import type {SingleTableContent}  from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityCategories}              from '../core/entityCategory/EntityCategories';
import {EntityCategory}                from '../core/entityCategory/EntityCategory';
import {EntityCategoryLoader}          from '../core/entityCategory/EntityCategory.loader';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
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
        for (const [englishName, category,] of this.map) {
            content.push([englishName,
                <>{index}</>,
                <Image source={this.enum[index - 1].imagePath} fallbackName={`${englishName} - image`}/>,
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
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}
