import React from 'react';

import type {GameProperty} from '../properties/GameProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Games}                               from './Games';

export default class GameComponent
    extends AbstractDualEntityPropertyComponent<GameProperty> {

    protected get _isInAll(): boolean {
        return this.reference.isInSuperMarioMaker1 && this.reference.isInSuperMarioMaker2;
    }

    protected get _isInFirst(): boolean {
        return this.reference.isInSuperMarioMaker1;
    }

    protected _renderSingleComponent(game: Games,): JSX.Element {
        return <img key={`${this.name.english} - ${game.englishName}`} src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    protected _renderFirstComponent(): JSX.Element {
        return this._renderSingleComponent(Games.SUPER_MARIO_MAKER_1);
    }

    protected _renderSecondComponent(): JSX.Element {
        return this._renderSingleComponent(Games.SUPER_MARIO_MAKER_2);
    }

    protected _renderComponentForAll(): JSX.Element {
        return <GameContentTranslationComponent translationCallback={translation => <span>{translation('Every games')}</span>}/>;
    }

}
