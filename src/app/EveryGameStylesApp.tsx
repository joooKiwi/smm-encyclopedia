import type {PossibleEnglishName} from '../entity/gameStyle/GameStyles.types';
import type {SingleTableContent}  from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {GameStyle}                     from '../entity/gameStyle/GameStyle';
import {GameStyleLoader}               from '../entity/gameStyle/GameStyle.loader';
import {GameStyles}                    from '../entity/gameStyle/GameStyles';
import {Games}                         from '../entity/game/Games';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryGameStylesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, GameStyle>;

    protected get map() {
        return this.#map ??= GameStyleLoader.get.load();
    }

    protected get enum() {
        return GameStyles.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, gameStyle,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                this.enum[index - 1].renderSingleComponent,
                <NameComponent id="name" name={gameStyle} popoverOrientation="left"/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker2}/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="gameStyle-table"
            caption={<GameContentTranslationComponent translationKey="Every game styles"/>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'image', height: 2, element: <ContentTranslationComponent translationKey="Image"/>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'game', width: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                ],
                [
                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            ]}
            content={this.content}
        />;
    }

}
