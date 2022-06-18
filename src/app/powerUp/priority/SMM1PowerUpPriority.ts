import type {ClassInAnySuperMarioMakerGame}              from '../../../core/game/ClassInAnySuperMarioMakerGame';
import type {Entities}                                   from '../../../core/entity/Entities';
import type {GameStyles}                                 from '../../../core/gameStyle/GameStyles';
import type {ImageRetrieverCallback, PossibleGameStyles} from './PowerUpPriority';

import {AbstractPowerUpByAllPossibleGameStylesPriority} from './AbstractPowerUpByAllPossibleGameStylesPriority';

export class SMM1PowerUpPriority
    extends AbstractPowerUpByAllPossibleGameStylesPriority {

    //region Attributes

    static readonly #IS_IN_GAME: ClassInAnySuperMarioMakerGame<true, false, false> = {isInSuperMarioMaker1: true, isInSuperMarioMakerFor3DS: false, isInSuperMarioMaker2: false,};

    //endregion Attributes

    public constructor(entity: Entities, gameStylesDisplayed: GameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | PossibleGameStyles, callback: ImageRetrieverCallback,)
    public constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback,) {
        super(entity, gameStylesDisplayed, callback, SMM1PowerUpPriority.#IS_IN_GAME,);
    }

}
