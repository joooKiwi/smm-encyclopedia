import type {GameProperty} from '../properties/GameProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Games}                               from './Games';
import Image                                 from '../../app/tools/images/Image';
import {StringContainer}                     from '../StringContainer';

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
        return GameComponent.renderSingleComponent(game, this.name.english,);
    }

    public static renderSingleComponent(game: Games, identifier?: string,) {
        const gameEnglishNameInHtml = game.englishNameInHtml;
        const key = identifier == null ? game.englishName : `${identifier} - ${game.englishName}`;
        const id = identifier == null ? `${gameEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${gameEnglishNameInHtml}-game-image`;

        return <Image key={key} id={id} source={game.imagePath} fallbackName={game.englishName} className={`game-image ${gameEnglishNameInHtml}-image`}/>;
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
