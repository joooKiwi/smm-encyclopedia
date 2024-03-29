import type {ImagesRetrieverCallback, PossibleGameStyles} from 'app/powerUp/priority/PowerUpPriority'
import type {Entities}                                    from 'core/entity/Entities'
import type {ClassInAnySuperMarioMakerGame}               from 'core/game/ClassInAnySuperMarioMakerGame'
import type {GameStyles}                                  from 'core/gameStyle/GameStyles'

import {AbstractPowerUpByAllPossibleGameStylesPriority} from 'app/powerUp/priority/AbstractPowerUpByAllPossibleGameStylesPriority'

export class AllGamesPowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region -------------------- Fields --------------------

    static readonly #IS_IN_GAME: ClassInAnySuperMarioMakerGame<true, true, true> = {isInSuperMarioMaker1: true, isInSuperMarioMakerFor3DS: true, isInSuperMarioMaker2: true,}

    //endregion -------------------- Fields --------------------

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: PossibleGameStyles, callback: ImagesRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImagesRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, AllGamesPowerUpPriority.#IS_IN_GAME,)
    }

}
