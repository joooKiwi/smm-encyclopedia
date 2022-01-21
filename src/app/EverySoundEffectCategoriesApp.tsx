import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import NameComponent                   from '../lang/name/component/Name.component';
import {SoundEffectCategories}         from '../core/soundEffectCategory/SoundEffectCategories';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EverySoundEffectCategoriesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const enumerable of SoundEffectCategories) {
            const soundEffectCategory = enumerable.reference;

            content.push([enumerable.englishName,
                <>{index}</>,
                <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>,
                <NameComponent id="name" name={soundEffectCategory} popoverOrientation="left"/>,
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
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
            ]}
            content={this.content}
        />;
    }

}
