import type {ClassInAnySuperMarioMakerGame}              from '../../../core/game/ClassInAnySuperMarioMakerGame';
import type {Entities}                                   from '../../../core/entity/Entities';
import type {GameStyles}                                 from '../../../core/gameStyle/GameStyles';
import type {ImageRetrieverCallback, PossibleGameStyles} from './PowerUpPriority';

import {AbstractPowerUpByAllPossibleGameStylesPriority} from './AbstractPowerUpByAllPossibleGameStylesPriority';

export class SMM2PowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region Attributes

    static readonly #IS_IN_GAME: ClassInAnySuperMarioMakerGame<false, false, true> = {isInSuperMarioMaker1: false, isInSuperMarioMakerFor3DS: false, isInSuperMarioMaker2: true,};

    //endregion Attributes

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | PossibleGameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, SMM2PowerUpPriority.#IS_IN_GAME,);
    }

}
