import './EveryGameStylesApp.scss';

import React from 'react';

import AbstractApp           from './AbstractApp';
import GameComponent         from '../entity/game/GameComponent';
import {GameStyle}           from '../entity/gameStyle/GameStyle';
import {GameStyleLoader}     from '../entity/gameStyle/GameStyleLoader';
import {GameStyles}          from '../entity/gameStyle/GameStyles';
import {SingleTableContent}  from './tools/table/Table';
import SMM2NameComponent     from '../entity/lang/SMM2NameComponent';
import TableWithTranslations from './tools/table/TableWithTranslations';

export default class EveryGameStylesApp
    extends AbstractApp {

    #themes?: Map<string, GameStyle>;

    protected get map() {
        return this.#themes ?? (this.#themes = GameStyleLoader.get.load());
    }

    protected get enum() {
        return GameStyles.values;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, gameStyle] of this.map.entries()) {
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

        return <TableWithTranslations renderCallback={translations => ({
            id: 'gameStyle_table',
            caption: translations.gameContentTranslation('Every game styles'),
            headers: [
                '#',
                translations.contentTranslation('Image'),
                translations.contentTranslation('Language'),
                translations.gameContentTranslation('Game'),

            ],
            content: this.content,
        })}/>;
    }

}
