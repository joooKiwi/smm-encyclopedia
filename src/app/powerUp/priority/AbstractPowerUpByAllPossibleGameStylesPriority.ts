import type {ImageRetrieverCallback, PossibleGameStyles, PowerUpByAllGameStylesPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                                                   from 'core/entity/Entities'
import type {ClassInAnySuperMarioMakerGame}                                              from 'core/game/ClassInAnySuperMarioMakerGame'
import type {ObjectHolder}                                                               from 'util/holder/ObjectHolder'

import {AbstractPowerUpBySMM1GameStylesPriority} from 'app/powerUp/priority/AbstractPowerUpBySMM1GameStylesPriority'
import {GameStyles}                              from 'core/gameStyle/GameStyles'
import {DelayedObjectHolderContainer}            from 'util/holder/DelayedObjectHolder.container'
import {ObjectHolders}                           from 'util/holder/objectHolders'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_3D_WORLD,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractPowerUpByAllPossibleGameStylesPriority
    extends AbstractPowerUpBySMM1GameStylesPriority
    implements PowerUpByAllGameStylesPriority {

    //region -------------------- Fields --------------------

    readonly #sm3dwImagesHolder: ObjectHolder<readonly string[]>

    //endregion -------------------- Fields --------------------

    protected constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback, isIn: ClassInAnySuperMarioMakerGame,) {
        super(entity, gameStylesDisplayed, callback, isIn,)
        this.#sm3dwImagesHolder = entity.reference.isInSuperMario3DWorldStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_3D_WORLD)) : ObjectHolders.EMPTY_ARRAY
    }

    //region -------------------- Getter methods --------------------

    public get sm3dwImages(): readonly string[] {
        return this.#sm3dwImagesHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
