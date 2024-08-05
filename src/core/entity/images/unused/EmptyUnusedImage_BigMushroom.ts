import type {UnusedImage_BigMushroom}                          from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {ClassWithNullObjectPattern, EmptyUnusedImageName} from 'util/ClassWithNullObjectPattern'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class EmptyUnusedImage_BigMushroom
    implements UnusedImage_BigMushroom, ClassWithNullObjectPattern<EmptyUnusedImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUnusedImage_BigMushroom

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly all = EMPTY_ARRAY

    public toString(): EmptyUnusedImageName {
        return 'Empty unused image'
    }

}
