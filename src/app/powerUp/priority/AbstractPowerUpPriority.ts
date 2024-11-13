import type {Lazy}  from '@joookiwi/lazy'
import type {Array} from '@joookiwi/type'
import {isArray}    from '@joookiwi/collection'
import {lazy}       from '@joookiwi/lazy'

import type {ImagesCallback, PossibleGameStyles, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                            from 'core/entity/Entities'
import type {EntityImageFile}                                     from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                       from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Name}                                                from 'lang/name/Name'

import {ImageCallbacks} from 'app/powerUp/priority/ImageCallbacks'
import {GameStyles}     from 'core/gameStyle/GameStyles'

import EDITOR_IMAGE_CALLBACK = ImageCallbacks.EDITOR_IMAGE_CALLBACK

export abstract class AbstractPowerUpPriority
    implements PowerUpPriority {

    //region -------------------- Fields --------------------

    readonly #nameHolder: Lazy<Name<string>>
    readonly #imagesHolder: Lazy<Array<EntityImageFile>>
    readonly #isIn

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(nameCallback: () => Name<string>,
                          imagesCallback: ImagesCallback,
                          isIn: ClassInAnySuperMarioMakerGame,) {
        this.#nameHolder = lazy(nameCallback,)
        this.#imagesHolder = lazy(imagesCallback,)
        this.#isIn = isIn
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): Name<string> {
        return this.#nameHolder.value
    }

    public get images(): Array<EntityImageFile> {
        return this.#imagesHolder.value
    }

    public get isIn(): ClassInAnySuperMarioMakerGame {
        return this.#isIn
    }


    public static getEditorImages(entity: Entities, gameStyles: | GameStyles | PossibleGameStyles,): Array<EntityImageFile> {
        return (isArray(gameStyles,) ? gameStyles : [gameStyles])
            .map(gameStyle => EDITOR_IMAGE_CALLBACK(entity, gameStyle,)).flat()
    }

    //endregion -------------------- Getter methods --------------------

}
