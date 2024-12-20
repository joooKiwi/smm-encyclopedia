import type {UnusedImage_Regular}                              from 'core/entity/images/unused/UnusedImage_Regular'
import type {ClassWithNullObjectPattern, EmptyUnusedImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_MAP = Empty.EMPTY_MAP

export class EmptyUnusedImage_Regular
    implements UnusedImage_Regular, ClassWithNullObjectPattern<EmptyUnusedImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUnusedImage_Regular

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly all = EMPTY_MAP

    public toString(): EmptyUnusedImageName {
        return 'Empty unused image'
    }

}
