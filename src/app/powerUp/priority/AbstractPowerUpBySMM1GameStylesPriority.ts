import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {ImagesRetrieverCallback, PossibleGameStyles, PowerUpBySMM1GameStylesPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                     from 'core/entity/Entities'
import type {EntityImageFile}                                                              from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                                                from 'core/game/ClassInAnySuperMarioMakerGame'

import {AbstractPowerUpPriority} from 'app/powerUp/priority/AbstractPowerUpPriority'
import {GameStyles}              from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW

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
        this.#smbImagesHolder = entity.reference.isInSuperMarioBrosStyle ? lazy(() => callback(entity, SMB,),) : CommonLazy.EMPTY_ARRAY
        this.#smb3ImagesHolder = entity.reference.isInSuperMarioBros3Style ? lazy(() => callback(entity, SMB3,),) : CommonLazy.EMPTY_ARRAY
        this.#smwImagesHolder = entity.reference.isInSuperMarioWorldStyle ? lazy(() => callback(entity, SMW,),) : CommonLazy.EMPTY_ARRAY
        this.#nsmbuImagesHolder = entity.reference.isInNewSuperMarioBrosUStyle ? lazy(() => callback(entity, NSMBU,),) : CommonLazy.EMPTY_ARRAY
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
