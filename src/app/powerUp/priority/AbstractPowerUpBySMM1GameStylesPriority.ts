import type {Lazy}           from '@joookiwi/lazy'
import type {Array}          from '@joookiwi/type'
import {isArray, mapByArray} from '@joookiwi/collection'
import {CommonLazy, lazy}    from '@joookiwi/lazy'

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

    readonly #smbImagesHolder: Lazy<Array<EntityImageFile>>
    readonly #smb3ImagesHolder: Lazy<Array<EntityImageFile>>
    readonly #smwImagesHolder: Lazy<Array<EntityImageFile>>
    readonly #nsmbuImagesHolder: Lazy<Array<EntityImageFile>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(entity: Entities,
                          gameStylesDisplayed: | GameStyles | PossibleGameStyles,
                          callback: ImagesRetrieverCallback,
                          isIn: ClassInAnySuperMarioMakerGame,) {
        super(() => entity.reference.nameContainer,
            () => mapByArray(isArray(gameStylesDisplayed,) ? gameStylesDisplayed : [gameStylesDisplayed], gameStyle => callback(entity, gameStyle)).toArray().flat(),
            isIn,)
        this.#smbImagesHolder = entity.reference.isInSuperMarioBrosStyle ? lazy(() => callback(entity, SMB,),) : CommonLazy.EMPTY_ARRAY
        this.#smb3ImagesHolder = entity.reference.isInSuperMarioBros3Style ? lazy(() => callback(entity, SMB3,),) : CommonLazy.EMPTY_ARRAY
        this.#smwImagesHolder = entity.reference.isInSuperMarioWorldStyle ? lazy(() => callback(entity, SMW,),) : CommonLazy.EMPTY_ARRAY
        this.#nsmbuImagesHolder = entity.reference.isInNewSuperMarioBrosUStyle ? lazy(() => callback(entity, NSMBU,),) : CommonLazy.EMPTY_ARRAY
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get smbImages(): Array<EntityImageFile> {
        return this.#smbImagesHolder.value
    }

    public get smb3Images(): Array<EntityImageFile> {
        return this.#smb3ImagesHolder.value
    }

    public get smwImages(): Array<EntityImageFile> {
        return this.#smwImagesHolder.value
    }

    public get nsmbuImages(): Array<EntityImageFile> {
        return this.#nsmbuImagesHolder.value
    }

    //endregion -------------------- Getter methods --------------------

}
