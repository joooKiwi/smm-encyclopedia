import './EveryEntitiesApp.scss';

import type {Entity}               from '../core/entity/Entity';
import type {EntityAppStates}      from './AppStates.types';
import type {PossibleEnglishName}  from '../core/entity/Entities.types';
import type {SingleHeadersContent} from './tools/table/SimpleHeader';
import type {SingleTableContent}   from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import {EntityLoader}                  from '../core/entity/Entity.loader';
import {Entities}                      from '../core/entity/Entities';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Table                           from './tools/table/Table';
import {EntityAppOption}               from './options/EntityAppOption';

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractApp<{}, EntityAppStates> {

    //region -------------------- Attributes & getter methods --------------------

    //region -------------------- Attributes --------------------

    #map?: ReadonlyMap<PossibleEnglishName, Entity>;

    //endregion -------------------- Attributes --------------------

    public constructor(props: {},) {
        super(props,);
        EntityAppOption.REFERENCE = this;
        this.state = EntityAppOption.createDefaultState;
    }

    //region -------------------- Getter methods --------------------

    protected get enum() {
        return Entities.values;
    }

    protected get map() {
        return this.#map ??= EntityLoader.get.load();
    }


    //endregion -------------------- Getter methods --------------------

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName,] of this.map) {
            const enumeration = this.enum[index - 1];
            EntityAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration;
            content.push([englishName,
                ...[
                    <>{index}</>,
                    EntityAppOption.IMAGES.renderContent,
                    EntityAppOption.NAME.renderContent,
                    EntityAppOption.GAME.renderContent,
                    EntityAppOption.GAME_STYLE.renderContent,
                    EntityAppOption.COURSE_THEME.renderContent,
                    EntityAppOption.TIME.renderContent,
                    EntityAppOption.CATEGORY.renderContent,
                    EntityAppOption.LIMIT.renderContent,
                ].flat(),
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="entity-table"
            caption={<GameContentTranslationComponent translationKey="Every entities"/>}
            headers={[
                {key: 'originalOrder', element: <>#</>,},
                EntityAppOption.IMAGES.renderTableHeader,
                EntityAppOption.NAME.renderTableHeader,
                EntityAppOption.GAME.renderTableHeader,
                EntityAppOption.GAME_STYLE.renderTableHeader,
                EntityAppOption.COURSE_THEME.renderTableHeader,
                EntityAppOption.TIME.renderTableHeader,
                EntityAppOption.CATEGORY.renderTableHeader,
                EntityAppOption.LIMIT.renderTableHeader,
            ].filter(header => header != null) as SingleHeadersContent}
            content={this.content}
        />;
    }

}
