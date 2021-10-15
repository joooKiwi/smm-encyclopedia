import type {GameProperty} from '../properties/GameProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Games}                               from './Games';

/**
 * @reactComponent
 */
export default class GameComponent
    extends AbstractDualEntityPropertyComponent<GameProperty> {

    protected get _isInAll() {
        return this.reference.isInSuperMarioMaker1 && this.reference.isInSuperMarioMaker2;
    }

    protected get _isInFirst() {
        return this.reference.isInSuperMarioMaker1;
    }

    protected _renderSingleComponent(game: Games,) {
        return <img key={`${this.name.english} - ${game.englishName}`} src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    protected _renderFirstComponent() {
        return this._renderSingleComponent(Games.SUPER_MARIO_MAKER_1);
    }

    protected _renderSecondComponent() {
        return this._renderSingleComponent(Games.SUPER_MARIO_MAKER_2);
    }

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every games')}</span>}/>;
    }

}
