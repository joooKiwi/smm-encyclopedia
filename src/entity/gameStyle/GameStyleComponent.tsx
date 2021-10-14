import type {GameStyleProperty} from '../properties/GameStyleProperty';
import type {GameStyles}        from './GameStyles';

import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';

/**
 * @reactComponent
 */
export default class GameStyleComponent
    extends AbstractEntityPropertyComponent<GameStyleProperty, GameStyles> {


    protected get map(): ReadonlyMap<GameStyles, boolean> {
        return this.reference.toGameStyleMap();
    }

    protected get _isInAll(): boolean {
        return this.reference.isInSuperMarioBrosStyle
            && this.reference.isInSuperMarioBros3Style
            && this.reference.isInSuperMarioWorldStyle
            && this.reference.isInNewSuperMarioBrosUStyle
            && (this.reference.isInSuperMario3DWorldStyle ?? false);
    }

    protected _renderSingleComponent(gameStyle: GameStyles,): JSX.Element {
        return <img key={`${this.name.english} - ${gameStyle.englishName}`} src={gameStyle.smallImagePath} alt={gameStyle.englishName} className="gameStyle_image"/>;
    }

    protected _renderComponentForAll(): JSX.Element {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every game styles')}</span>}/>;
    }


}
