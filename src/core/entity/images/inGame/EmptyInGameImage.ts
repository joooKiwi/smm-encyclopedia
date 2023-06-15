import type {InGameImage_SMM1}                                 from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                                 from 'core/entity/images/inGame/InGameImage_SMM2'
import type {ClassWithNullObjectPattern, EmptyInGameImageName} from 'util/ClassWithNullObjectPattern'
import type {EmptyArray}                                       from 'util/types/variables'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyInGameImage
    implements InGameImage_SMM1, InGameImage_SMM2, ClassWithNullObjectPattern<EmptyInGameImageName> {

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
