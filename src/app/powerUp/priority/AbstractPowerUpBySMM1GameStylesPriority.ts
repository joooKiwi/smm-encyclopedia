import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {ImagesRetrieverCallback, PossibleGameStyles, PowerUpBySMM1GameStylesPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                     from 'core/entity/Entities'
import type {EntityImageFile}                                                              from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                                                from 'core/game/ClassInAnySuperMarioMakerGame'

import {AbstractPowerUpPriority} from 'app/powerUp/priority/AbstractPowerUpPriority'
import {GameStyles}              from 'core/gameStyle/GameStyles'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpBySMM1GameStylesPriority
    extends AbstractPowerUpPriority
    implements PowerUpBySMM1GameStylesPriority {

    //region -------------------- Fields --------------------

    readonly #smbImagesHolder: Lazy<readonly EntityImageFile[]>
    readonly #smb3ImagesHolder: Lazy<readonly EntityImageFile[]>
    readonly #smwImagesHolder: Lazy<readonly EntityImageFile[]>
    readonly #nsmbuImagesHolder: Lazy<readonly EntityImageFile[]>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(entity: Entities,
                          gameStylesDisplayed: | GameStyles | PossibleGameStyles,
                          callback: ImagesRetrieverCallback,
                          isIn: ClassInAnySuperMarioMakerGame,) {
        super(() => entity.reference.nameContainer,
            () => (gameStylesDisplayed instanceof Array ? gameStylesDisplayed : [gameStylesDisplayed]).map(gameStyle => callback(entity, gameStyle)).flat(),
            isIn,)
        this.#smbImagesHolder = entity.reference.isInSuperMarioBrosStyle ? lazy(() => callback(entity, SUPER_MARIO_BROS,),) : CommonLazy.EMPTY_ARRAY
        this.#smb3ImagesHolder = entity.reference.isInSuperMarioBros3Style ? lazy(() => callback(entity, SUPER_MARIO_BROS_3,),) : CommonLazy.EMPTY_ARRAY
        this.#smwImagesHolder = entity.reference.isInSuperMarioWorldStyle ? lazy(() => callback(entity, SUPER_MARIO_WORLD,),) : CommonLazy.EMPTY_ARRAY
        this.#nsmbuImagesHolder = entity.reference.isInNewSuperMarioBrosUStyle ? lazy(() => callback(entity, NEW_SUPER_MARIO_BROS_U,),) : CommonLazy.EMPTY_ARRAY
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get smbImages(): readonly EntityImageFile[] {
        return this.#smbImagesHolder.value
    }

    public get smb3Images(): readonly EntityImageFile[] {
        return this.#smb3ImagesHolder.value
    }

    public get smwImages(): readonly EntityImageFile[] {
        return this.#smwImagesHolder.value
    }

    public get nsmbuImages(): readonly EntityImageFile[] {
        return this.#nsmbuImagesHolder.value
    }

    //endregion -------------------- Getter methods --------------------

}
