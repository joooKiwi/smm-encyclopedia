import type {EmptyArray} from '@joookiwi/type'

import type {InGameImage_Regular}                              from 'core/entity/images/inGame/InGameImage_Regular'
import type {ClassWithNullObjectPattern, EmptyInGameImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

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

    public readonly images = EMPTY_ARRAY
    public readonly imagesWithAssociation = EMPTY_ARRAY

    public get(): EmptyArray {
        return EMPTY_ARRAY
    }

    public toString(): EmptyInGameImageName {
        return 'Empty "in game" image'
    }

}
