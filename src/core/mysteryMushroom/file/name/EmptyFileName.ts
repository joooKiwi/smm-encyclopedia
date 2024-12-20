import type {EmptyArray} from '@joookiwi/type'

import type {FileName} from 'core/mysteryMushroom/file/name/FileName'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

/** @singleton */
export class EmptyFileName
    implements FileName<EmptyArray, EmptyArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyFileName

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly imageFileNames = EMPTY_ARRAY
    public readonly soundFileName = EMPTY_ARRAY

}
