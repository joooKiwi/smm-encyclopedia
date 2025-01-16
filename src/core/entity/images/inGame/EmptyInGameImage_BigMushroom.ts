import type {InGameImage_BigMushroom}                          from 'core/entity/images/inGame/InGameImage_BigMushroom'
import type {ClassWithNullObjectPattern, EmptyInGameImageName} from 'util/ClassWithNullObjectPattern'

import {Empty} from 'util/emptyVariables'
import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** @singleton */
export class EmptyInGameImage_BigMushroom
    implements InGameImage_BigMushroom<never>,
        ClassWithNullObjectPattern<EmptyInGameImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyInGameImage_BigMushroom

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly images = EMPTY_COLLECTION_HOLDER

    public toString(): EmptyInGameImageName {
        return 'Empty "in game" image'
    }

}
