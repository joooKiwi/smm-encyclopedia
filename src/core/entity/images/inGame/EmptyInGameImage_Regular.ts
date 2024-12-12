import type {EmptyCollectionHolder} from '@joookiwi/collection'

import type {InGameImage_Regular}                              from 'core/entity/images/inGame/InGameImage_Regular'
import type {ClassWithNullObjectPattern, EmptyInGameImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** @singleton */
export class EmptyInGameImage_Regular
    implements InGameImage_Regular<never>,
        ClassWithNullObjectPattern<EmptyInGameImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyInGameImage_Regular

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER
    public readonly imagesWithAssociation = EMPTY_COLLECTION_HOLDER

    public get(): EmptyCollectionHolder {
        return EMPTY_COLLECTION_HOLDER
    }

    public toString(): EmptyInGameImageName {
        return 'Empty "in game" image'
    }

}
