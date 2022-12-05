import type {FileName}   from 'core/mysteryMushroom/file/name/FileName'
import type {EmptyArray} from 'util/types/variables'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyFileName
    implements FileName<EmptyArray, EmptyArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyFileName

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly imageFileNames = EMPTY_ARRAY
    public readonly soundFileName = EMPTY_ARRAY

}
