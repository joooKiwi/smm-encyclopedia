import type {GameProperty} from '../entity/properties/GameProperty';

import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';
import {Games}                           from './Games';
import Image                             from '../../app/tools/images/Image';
import {StringContainer}                 from '../../util/StringContainer';

/**
 * @reactComponent
 */
export default class GameComponent
    extends AbstractEntityPropertyComponent<GameProperty, Games> {

    protected override get _map() {
        return this.reference.toGameMap();
    }

    protected override get _isInAll() {
        return this.reference.isInSuperMarioMaker1
            && this.reference.isInSuperMarioMakerFor3DS
            && this.reference.isInSuperMarioMaker2;
    }

    protected override _renderSingleComponent(game: Games,) {
        return GameComponent.renderSingleComponent(game, this.name.english,);
    }

    public static renderSingleComponent(game: Games, identifier?: string,) {
        const gameEnglishNameInHtml = game.englishNameInHtml;
        const key = identifier == null ? game.englishName : `${identifier} - ${game.englishName}`;
        const id = identifier == null ? `${gameEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${gameEnglishNameInHtml}-game-image`;

        return <Image key={key} id={id} source={game.imagePath} fallbackName={game.englishName} className={`game-image ${gameEnglishNameInHtml}-image`}/>;
    }

    protected override _renderComponentForAllAsText() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every games')}</span>}/>;
    }

    protected override _renderComponentForAllAsImages() {
        return <div key={`${this.name.english} (every games)`}>{Games.values.map(game => this._renderSingleComponent(game))}</div>;
    }

}
