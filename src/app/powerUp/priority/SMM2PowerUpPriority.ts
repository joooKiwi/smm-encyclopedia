import type {ImagesRetrieverCallback, PossibleGameStyles} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                    from 'core/entity/Entities'
import type {ClassInAnySuperMarioMakerGame}               from 'core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                                  from 'core/gameStyle/GameStyles'

import {AbstractPowerUpByAllPossibleGameStylesPriority} from 'app/powerUp/priority/AbstractPowerUpByAllPossibleGameStylesPriority'

export class SMM2PowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region -------------------- Fields --------------------

    static readonly #IS_IN_GAME: ClassInAnySuperMarioMakerGame<false, false, true> = {isInSuperMarioMaker1: false, isInSuperMarioMakerFor3DS: false, isInSuperMarioMaker2: true,}

    //endregion -------------------- Fields --------------------

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | PossibleGameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImagesRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, SMM2PowerUpPriority.#IS_IN_GAME,)
    }

}
