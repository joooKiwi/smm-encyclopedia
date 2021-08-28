import './EveryGameStylesApp.scss';

import React from 'react';

import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameComponent                   from '../entity/game/GameComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {GameStyle}                     from '../entity/gameStyle/GameStyle';
import {GameStyleLoader}               from '../entity/gameStyle/GameStyleLoader';
import {GameStyles}                    from '../entity/gameStyle/GameStyles';
import Table                           from './tools/table/Table';
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';

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
                <GameComponent reference={gameStyle} name={gameStyle}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="gameStyle_table"
            caption={<GameContentTranslationComponent translationCallback={translation => translation('Every game styles')}/>}
            headers={[
                '#',
                {key: 'image', element: <ContentTranslationComponent translationCallback={translation => translation('Image')}/>,},
                {key: 'language', element: <ContentTranslationComponent translationCallback={translation => translation('Language')}/>,},
                {key: 'game', element: <GameContentTranslationComponent translationCallback={translation => translation('Game')}/>,},

            ]}
            content={this.content}
        />;
    }

}
