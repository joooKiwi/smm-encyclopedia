import {withTranslation}               from 'react-i18next';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Games}                         from './Games';
import React                           from 'react';
import {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import {IsInGameProperty}              from '../properties/IsInGameProperty';

export interface GameElement
    extends GameContentTranslationElement {

    reference: IsInGameProperty

}

class GameComponent
    extends GameContentTranslationComponent<GameElement> {

    protected get reference() {
        return this.props.reference;
    }

    private __createGameImage(game: Games): JSX.Element {
        return <img src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    public render(): JSX.Element {
        return this.reference.isInSuperMarioMaker1 && this.reference.isInSuperMarioMaker2
            ? <span>{this.translation('Every games')}</span>
            : this.reference.isInSuperMarioMaker1
                ? this.__createGameImage(Games.SUPER_MARIO_MAKER_1)
                : this.__createGameImage(Games.SUPER_MARIO_MAKER_2);
    }

}

export default withTranslation('gameContent')(GameComponent);
