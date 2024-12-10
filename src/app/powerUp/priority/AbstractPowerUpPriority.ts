import type {Lazy}  from '@joookiwi/lazy'
import type {Array} from '@joookiwi/type'
import {lazy}       from '@joookiwi/lazy'

import type {ImagesCallback, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {EntityImageFile}                 from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}   from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Name}                            from 'lang/name/Name'

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

    //endregion -------------------- Getter methods --------------------

}
