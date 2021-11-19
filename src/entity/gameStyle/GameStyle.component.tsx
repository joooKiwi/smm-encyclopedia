import type {GameStyleProperty} from '../properties/GameStyleProperty';
import type {GameStyles}        from './GameStyles';

import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';

/**
 * @reactComponent
 */
export default class GameStyleComponent
    extends AbstractEntityPropertyComponent<GameStyleProperty, GameStyles> {


    protected get map() {
        return this.reference.toGameStyleMap();
    }

    protected get _isInAll() {
        return this.reference.isInSuperMarioBrosStyle
            && this.reference.isInSuperMarioBros3Style
            && this.reference.isInSuperMarioWorldStyle
            && this.reference.isInNewSuperMarioBrosUStyle
            && (this.reference.isInSuperMario3DWorldStyle ?? false);
    }

    protected _renderSingleComponent(gameStyle: GameStyles,) {
        return <img key={`${this.name.english} - ${gameStyle.englishName}`} src={gameStyle.imagePath} alt={gameStyle.englishName} className="gameStyle_image"/>;
    }

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every game styles')}</span>}/>;
    }


}
