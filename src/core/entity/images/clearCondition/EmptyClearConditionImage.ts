import type {ClearConditionImage}                                      from 'core/entity/images/clearCondition/ClearConditionImage'
import type {ClassWithNullObjectPattern, EmptyClearConditionImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EmptyClearConditionImage
    implements ClearConditionImage, ClassWithNullObjectPattern<EmptyClearConditionImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyClearConditionImage

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER
    public readonly imagesWithAssociation = EMPTY_COLLECTION_HOLDER

    public get(): never { throw new ReferenceError(`No game style exist on an empty clear condition image.`,) }

    public toString(): EmptyClearConditionImageName {
        return 'Empty "clear condition" image'
    }


}
