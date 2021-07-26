import React, {PureComponent} from 'react';

import type {GameProperty} from '../properties/GameProperty';
import type {Name}         from '../../lang/name/Name';

import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from './Games';

export interface GameElement {

    reference: GameProperty

    name: Name

}

export default class GameComponent
    extends PureComponent<GameElement> {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }

    private __createGameImage(game: Games,): JSX.Element {
        return <img key={`${this.name.english} - ${game.englishName}`} src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    public render(): JSX.Element {
        return this.reference.isInSuperMarioMaker1 && this.reference.isInSuperMarioMaker2
            ? <span><GameContentTranslationComponent renderCallback={translation => translation('Every games')}/></span>
            : this.reference.isInSuperMarioMaker1
                ? this.__createGameImage(Games.SUPER_MARIO_MAKER_1)
                : this.__createGameImage(Games.SUPER_MARIO_MAKER_2);
    }

}
