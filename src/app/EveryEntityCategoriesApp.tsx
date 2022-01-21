import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityCategories}              from '../core/entityCategory/EntityCategories';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumeration of EntityCategories) {
            const category = enumeration.reference;
            content.push([enumeration.englishName,
                <>{index}</>,
                <Image source={enumeration.imagePath} fallbackName={`${enumeration.englishName} - image`}/>,
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
