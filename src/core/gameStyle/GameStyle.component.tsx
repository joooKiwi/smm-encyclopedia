import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'

import TextComponent                     from 'app/tools/text/TextComponent'
import {AbstractEntityPropertyComponent} from 'core/_component/AbstractEntityPropertyComponent'
import {GameStyles}                      from 'core/gameStyle/GameStyles'
import Image                             from 'app/tools/images/Image'
import {gameContentTranslation}          from 'lang/components/translationMethods'
import {StringContainer}                 from 'util/StringContainer'

/** @reactComponent */
export default class GameStyleComponent
    extends AbstractEntityPropertyComponent<GameStyleProperty, GameStyles> {


    protected override get _map() {
        return this.reference.toGameStyleMap()
    }

    protected override get _isInAll() {
        return this.reference.isInSuperMarioBrosStyle
            && this.reference.isInSuperMarioBros3Style
            && this.reference.isInSuperMarioWorldStyle
            && this.reference.isInNewSuperMarioBrosUStyle
            && this.reference.isInSuperMario3DWorldStyle === true
    }

    protected override _renderSingleComponent(gameStyle: GameStyles,) {
        return GameStyleComponent.renderSingleComponent(gameStyle, this.name.english,)
    }

    public static renderSingleComponent(gameStyle: GameStyles, identifier?: string,) {
        const gameStyleEnglishNameInHtml = gameStyle.englishNameInHtml
        const key = identifier == null ? gameStyle.englishName : `${identifier} - ${gameStyle.englishName}`
        const id = identifier == null ? `${gameStyleEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${gameStyleEnglishNameInHtml}-gameStyle-image`

        return <Image key={key} id={id} file={gameStyle.imageFile} className={`gameStyle-image ${gameStyleEnglishNameInHtml}-image`}/>
    }

    protected override _renderComponentForAllAsText() {
        return <TextComponent content={gameContentTranslation('game style.all',)}/>
    }

    protected override _renderComponentForAllAsImages() {
        return <div key={`${this.name.english} (every game styles)`}>{GameStyles.CompanionEnum.get.values.map(gameStyle => this._renderSingleComponent(gameStyle),)}</div>
    }

}
