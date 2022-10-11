import type {ClassWithNullObjectPattern, EmptyClearConditionImageName} from '../../../../util/ClassWithNullObjectPattern'
import type {ClearConditionImage}                                      from './ClearConditionImage'

import {EMPTY_ARRAY} from '../../../../util/emptyVariables'

export class EmptyClearConditionImage
    implements ClearConditionImage, ClassWithNullObjectPattern<EmptyClearConditionImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyClearConditionImage

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get(): typeof EMPTY_ARRAY {
        return EMPTY_ARRAY
    }

    public toString(): EmptyClearConditionImageName {
        return 'Empty "clear condition" image'
    }


}
