import type {InGameImage}                                      from 'core/entity/images/inGame/InGameImage'
import type {ClassWithNullObjectPattern, EmptyInGameImageName} from 'util/ClassWithNullObjectPattern'
import type {EmptyArray}                                       from 'util/types/variables'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyInGameImage
    implements InGameImage, ClassWithNullObjectPattern<EmptyInGameImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyInGameImage

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(): EmptyArray {
        return EMPTY_ARRAY
    }

    public toString(): EmptyInGameImageName {
        return 'Empty "in game" image'
    }

}
