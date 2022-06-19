import './GameStylesApp.scss';

import type {GameStyleAppStates}   from './AppStates.types';
import type {SingleHeadersContent} from './tools/table/SimpleHeader';
import type {SingleTableContent}   from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {GameStyleAppOption}            from './options/GameStyleAppOption';
import {GameStyles}                    from '../core/gameStyle/GameStyles';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EveryGameStylesApp
    extends AbstractApp<{}, GameStyleAppStates> {


    public constructor(props: {},) {
        super(props,);
        GameStyleAppOption.REFERENCE = this;
        this.state = GameStyleAppOption.createDefaultState;
    }

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumerable of GameStyles) {
            GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumerable;

            content.push([enumerable.englishName,
                ...[
                    <>{index}</>,
                    GameStyleAppOption.IMAGE.renderContent,
                    GameStyleAppOption.NAME.renderContent,
                    GameStyleAppOption.GAME.renderContent,
                    GameStyleAppOption.NIGHT_DESERT_WIND.renderContent,
                ].flat(),
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected override _mainContent() {
        return <Table
            id="gameStyle-table"
            caption={<GameContentTranslationComponent translationKey="Every game styles"/>}
            headers={[
                {key: 'originalOrder', element: <>#</>,},
                GameStyleAppOption.IMAGE.renderTableHeader,
                GameStyleAppOption.NAME.renderTableHeader,
                GameStyleAppOption.GAME.renderTableHeader,
                GameStyleAppOption.NIGHT_DESERT_WIND.renderTableHeader,
            ].filter(header => header != null) as SingleHeadersContent}
            content={this.content}
        />;
    }

}
