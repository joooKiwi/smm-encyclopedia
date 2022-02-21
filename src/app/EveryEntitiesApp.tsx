import './EveryEntitiesApp.scss';
import './options/EntityAppOption.scss'

import type {EntityAppStates}      from './AppStates.types';
import type {SingleHeadersContent} from './tools/table/SimpleHeader';
import type {SingleTableContent}   from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import {Entities}                      from '../core/entity/Entities';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Table                           from './tools/table/Table';
import {EntityAppOption}               from './options/EntityAppOption';

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractApp<{}, EntityAppStates> {

    public constructor(props: {},) {
        super(props,);
        EntityAppOption.REFERENCE = this;
        this.state = EntityAppOption.createDefaultState;
    }

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumeration of Entities) {
            EntityAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration;

            content.push([enumeration.englishName,
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
