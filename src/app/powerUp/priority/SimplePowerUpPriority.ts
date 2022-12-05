import type {ImagesCallback}                from 'app/powerUp/priority/PowerUpPriority'
import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Nullable}                      from 'util/types/nullable'

import {AbstractPowerUpPriority} from 'app/powerUp/priority/AbstractPowerUpPriority'
import {EmptyStringName}         from 'lang/name/EmptyStringName'


/**
 * A simple power-up priority made only to retrieve the images.
 */
export class SimplePowerUpPriority
    extends AbstractPowerUpPriority {

    //region -------------------- Fields --------------------

    static #EMPTY_NAME_CALLBACK = () => EmptyStringName.get
    static #IS_IN_GAMES: ClassInAnySuperMarioMakerGame<false, false, false> = {isInSuperMarioMaker1: false, isInSuperMarioMaker2: false, isInSuperMarioMakerFor3DS: false,}

    //region -------------------- Fields --------------------

    public constructor(imagesCallback: Nullable<ImagesCallback> = null,) {
        super(SimplePowerUpPriority.#EMPTY_NAME_CALLBACK, imagesCallback ?? AbstractPowerUpPriority._EMPTY_CALLBACK, SimplePowerUpPriority.#IS_IN_GAMES,)
    }


}
