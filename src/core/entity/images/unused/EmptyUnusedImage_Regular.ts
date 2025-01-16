import type {EmptyCollectionHolder} from '@joookiwi/collection'

import type {UnusedImage_Regular}                              from 'core/entity/images/unused/UnusedImage_Regular'
import type {ClassWithNullObjectPattern, EmptyUnusedImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EmptyUnusedImage_Regular
    implements UnusedImage_Regular, ClassWithNullObjectPattern<EmptyUnusedImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUnusedImage_Regular

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER
    public readonly imagesWithAssociation = EMPTY_COLLECTION_HOLDER

    public get(): EmptyCollectionHolder { return EMPTY_COLLECTION_HOLDER }

    public toString(): EmptyUnusedImageName {
        return 'Empty unused image'
    }

}
