import type {Lazy}        from '@joookiwi/lazy'
import {CommonLazy, lazy} from '@joookiwi/lazy'

import type {ImagesRetrieverCallback, PossibleGameStyles, PowerUpByAllGameStylesPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                    from 'core/entity/Entities'
import type {EntityImageFile}                                                             from 'core/entity/file/EntityImageFile'
import type {ClassInAnySuperMarioMakerGame}                                               from 'core/game/ClassInAnySuperMarioMakerGame'

import {AbstractPowerUpBySMM1GameStylesPriority} from 'app/powerUp/priority/AbstractPowerUpBySMM1GameStylesPriority'
import {GameStyles}                              from 'core/gameStyle/GameStyles'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_3D_WORLD,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpByAllPossibleGameStylesPriority
    extends AbstractPowerUpBySMM1GameStylesPriority
    implements PowerUpByAllGameStylesPriority {

    //region -------------------- Fields --------------------

    readonly #sm3dwImagesHolder: Lazy<readonly EntityImageFile[]>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(entity: Entities,
                          gameStylesDisplayed: | GameStyles | PossibleGameStyles,
                          callback: ImagesRetrieverCallback,
                          isIn: ClassInAnySuperMarioMakerGame,) {
        super(entity, gameStylesDisplayed, callback, isIn,)
        this.#sm3dwImagesHolder = entity.reference.isInSuperMario3DWorldStyle ? lazy(() => callback(entity, SUPER_MARIO_3D_WORLD)) : CommonLazy.EMPTY_ARRAY
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get sm3dwImages(): readonly EntityImageFile[] {
        return this.#sm3dwImagesHolder.value
    }

    //endregion -------------------- Getter methods --------------------

}
