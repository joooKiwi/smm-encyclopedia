import type {GameStyleProperty} from '../properties/GameStyleProperty';

import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';
import {GameStyles}                      from './GameStyles';
import Image                             from '../../app/tools/images/Image';
import {ProjectLanguages}                from '../../lang/ProjectLanguages';
import {StringContainer}                 from '../StringContainer';

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
        return GameStyleComponent.renderSingleComponent(gameStyle, ProjectLanguages.getEnglish(this.name),);
    }

    public static renderSingleComponent(gameStyle: GameStyles, identifier?: string,) {
        const gameStyleEnglishNameInHtml = gameStyle.englishNameInHtml;
        const key = identifier == null ? gameStyle.englishName : `${identifier} - ${gameStyle.englishName}`;
        const id = identifier == null ? `${gameStyleEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${gameStyleEnglishNameInHtml}-gameStyle-image`;

        return <Image key={key} id={id} source={gameStyle.imagePath} fallbackName={gameStyle.englishName} className={`gameStyle-image ${gameStyleEnglishNameInHtml}-image`}/>;
    }

    protected _renderComponentForAllAsText() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every game styles')}</span>}/>;
    }

    protected _renderComponentForAllAsImages() {
        return <div key={`${ProjectLanguages.getEnglish(this.name)} (every game styles)`}>{GameStyles.values.map(gameStyle => this._renderSingleComponent(gameStyle))}</div>;
    }

}
