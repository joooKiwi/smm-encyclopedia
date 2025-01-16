import type {UnusedImage_BigMushroom}                          from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {ClassWithNullObjectPattern, EmptyUnusedImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EmptyUnusedImage_BigMushroom
    implements UnusedImage_BigMushroom,
        ClassWithNullObjectPattern<EmptyUnusedImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUnusedImage_BigMushroom

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER

    public toString(): EmptyUnusedImageName {
        return 'Empty unused image'
    }

}
