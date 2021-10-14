import './EveryGameStylesApp.scss';

import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {GameStyle}                     from '../entity/gameStyle/GameStyle';
import {GameStyleLoader}               from '../entity/gameStyle/GameStyleLoader';
import {GameStyles}                    from '../entity/gameStyle/GameStyles';
import {Games}                         from '../entity/game/Games';
import Table                           from './tools/table/Table';
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryGameStylesApp
    extends AbstractApp {

    #themes?: Map<string, GameStyle>;

    protected get map() {
        return this.#themes ??= GameStyleLoader.get.load();
    }

    protected get enum() {
        return GameStyles.values;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, gameStyle,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <img src={this.enum[index - 1].largeImagePath} alt={englishName}/>,
                <SMM2NameComponent id="theme_name" name={gameStyle} popoverOrientation="left"/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker2}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="gameStyle_table"
            caption={<GameContentTranslationComponent translationKey="Every game styles"/>}
            headers={[
                '#',
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
            ]}
            content={this.content}
        />;
    }

}
