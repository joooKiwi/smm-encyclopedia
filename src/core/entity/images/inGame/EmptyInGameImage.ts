import type {ClassWithNullObjectPattern, EmptyInGameImageName} from '../../../../util/ClassWithNullObjectPattern'
import type {InGameImage}                                      from './InGameImage'

import {EMPTY_ARRAY} from '../../../../util/emptyVariables'

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

    public get(): typeof EMPTY_ARRAY {
        return EMPTY_ARRAY
    }

    public toString(): EmptyInGameImageName {
        return 'Empty "in game" image'
    }

}
