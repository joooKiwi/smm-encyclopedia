import './EveryGameStylesApp.scss';

import React                        from 'react';
import {TFunction, withTranslation} from 'react-i18next';

import AbstractApp           from './AbstractApp';
import {Games}               from '../entity/game/Games';
import {GameStyle}           from '../entity/gameStyle/GameStyle';
import {GameStyleLoader}     from '../entity/gameStyle/GameStyleLoader';
import {GameStyles}          from '../entity/gameStyle/GameStyles';
import {SingleTableContent}  from './tools/table/Table';
import SMM2NameComponent     from '../entity/lang/SMM2NameComponent';
import TableWithTranslations from './tools/table/TableWithTranslations';

class EveryGameStylesApp
    extends AbstractApp<{ t: TFunction<'gameContent'> }> {

    #themes?: Map<string, GameStyle>;

    protected get map() {
        return this.#themes ?? (this.#themes = GameStyleLoader.get.load());
    }

    protected get enum() {
        return GameStyles.values;
    }

    private __createGameImage(game: Games): JSX.Element {
        return <img src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    protected getGameComponent(gameStyle: GameStyle): JSX.Element {
        return gameStyle.isInSuperMarioMaker1 && gameStyle.isInSuperMarioMaker2
            ? <span>{this.props.t('Every games')}</span>
            : gameStyle.isInSuperMarioMaker1
                ? this.__createGameImage(Games.SUPER_MARIO_MAKER_1)
                : this.__createGameImage(Games.SUPER_MARIO_MAKER_2);
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, gameStyle] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <img src={this.enum[index - 1].largeImagePath} alt={englishName}/>,
                <SMM2NameComponent id="theme_name" name={gameStyle} popoverOrientation="left"/>,
                this.getGameComponent(gameStyle),
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

export default withTranslation('gameContent')(EveryGameStylesApp);
