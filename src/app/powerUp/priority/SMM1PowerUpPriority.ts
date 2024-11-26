import type {ImagesRetrieverCallback, PossibleGameStyles} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                    from 'core/entity/Entities'
import type {ClassInAnySuperMarioMakerGame}               from 'core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                                  from 'core/gameStyle/GameStyles'

import {AbstractPowerUpByAllPossibleGameStylesPriority} from 'app/powerUp/priority/AbstractPowerUpByAllPossibleGameStylesPriority'

export class SMM1PowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region -------------------- Fields --------------------

    static readonly #IS_IN_GAME = {isInSuperMarioMaker1: true, isInSuperMarioMakerFor3DS: false, isInSuperMarioMaker2: false,} as const satisfies ClassInAnySuperMarioMakerGame

    //endregion -------------------- Fields --------------------

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: PossibleGameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImagesRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, SMM1PowerUpPriority.#IS_IN_GAME,)
    }

}
