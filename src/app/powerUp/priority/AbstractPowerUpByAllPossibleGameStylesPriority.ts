import type {ClassInAnySuperMarioMakerGame}                                              from '../../../core/game/ClassInAnySuperMarioMakerGame';
import type {Entities}                                                                   from '../../../core/entity/Entities';
import type {ImageRetrieverCallback, PossibleGameStyles, PowerUpByAllGameStylesPriority} from './PowerUpPriority';
import type {ObjectHolder}                                                               from '../../../util/holder/ObjectHolder';

import {AbstractPowerUpBySMM1GameStylesPriority} from './AbstractPowerUpBySMM1GameStylesPriority';
import {DelayedObjectHolderContainer}            from '../../../util/holder/DelayedObjectHolder.container';
import {GameStyles}                              from '../../../core/gameStyle/GameStyles';
import {ObjectHolders}                           from '../../../util/holder/objectHolders';

//region Import from deconstruction

const {SUPER_MARIO_3D_WORLD} = GameStyles;

//endregion Import from deconstruction

export abstract class AbstractPowerUpByAllPossibleGameStylesPriority
    extends AbstractPowerUpBySMM1GameStylesPriority
    implements PowerUpByAllGameStylesPriority {

    //region Attributes

    readonly #sm3dwImagesHolder: ObjectHolder<readonly string[]>;

    //endregion Attributes

    protected constructor(entity: Entities, gameStylesDisplayed: | GameStyles | PossibleGameStyles, callback: ImageRetrieverCallback, isIn: ClassInAnySuperMarioMakerGame,) {
        super(entity, gameStylesDisplayed, callback, isIn,);
        this.#sm3dwImagesHolder = entity.reference.isInSuperMario3DWorldStyle ? new DelayedObjectHolderContainer(() => callback(entity, SUPER_MARIO_3D_WORLD)) : ObjectHolders.EMPTY_ARRAY;

    }

    //region Getter methods

    public get sm3dwImages(): readonly string[] {
        return this.#sm3dwImagesHolder.get;
    }

    //endregion Getter methods

}
