import type {GameProperty} from 'core/entity/properties/game/GameProperty'

import Image                             from 'app/tools/images/Image'
import TextComponent                     from 'app/tools/text/TextComponent'
import {AbstractEntityPropertyComponent} from 'core/_component/AbstractEntityPropertyComponent'
import {Games}                           from 'core/game/Games'
import {gameContentTranslation}          from 'lang/components/translationMethods'
import {StringContainer}                 from 'util/StringContainer'

/** @reactComponent */
export default class GameComponent
    extends AbstractEntityPropertyComponent<GameProperty, Games> {

    protected override get _map() {
        return this.reference.toGameMap()
    }

    protected override get _isInAll() {
        return this.reference.isInSuperMarioMaker1
            && this.reference.isInSuperMarioMakerFor3DS
            && this.reference.isInSuperMarioMaker2
    }

    protected override _renderSingleComponent(game: Games,) {
        return GameComponent.renderSingleComponent(game, this.name.english,)
    }

    public static renderSingleComponent(game: Games, identifier?: string,) {
        const gameEnglishNameInHtml = game.englishNameInHtml
        const key = identifier == null ? game.englishName : `${identifier} - ${game.englishName}`
        const id = identifier == null ? `${gameEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${gameEnglishNameInHtml}-game-image`

        return <Image key={key} id={id} file={game.imageFile} className={`game-image ${gameEnglishNameInHtml}-image`}/>
    }

    protected override _renderComponentForAllAsText() {
        return <TextComponent content={gameContentTranslation('game.all',)}/>
    }

    protected override _renderComponentForAllAsImages() {
        return <div key={`${this.name.english} (every games)`}>{Games.CompanionEnum.get.values.map(game => this._renderSingleComponent(game,),)}</div>
    }

}
