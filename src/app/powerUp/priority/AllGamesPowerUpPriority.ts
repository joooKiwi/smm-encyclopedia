import type {ClassInAnySuperMarioMakerGame}              from '../../../core/game/ClassInAnySuperMarioMakerGame'
import type {Entities}                                   from '../../../core/entity/Entities'
import type {GameStyles}                                 from '../../../core/gameStyle/GameStyles'
import type {ImageRetrieverCallback, PossibleGameStyles} from './PowerUpPriority'

import {AbstractPowerUpByAllPossibleGameStylesPriority} from './AbstractPowerUpByAllPossibleGameStylesPriority'

export class AllGamesPowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region -------------------- Fields --------------------

    static readonly #IS_IN_GAME: ClassInAnySuperMarioMakerGame<true, true, true> = {isInSuperMarioMaker1: true, isInSuperMarioMakerFor3DS: true, isInSuperMarioMaker2: true,}

    //endregion -------------------- Fields --------------------

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: PossibleGameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, AllGamesPowerUpPriority.#IS_IN_GAME,)
    }

}
