import type {AppOptionWithContent} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}   from 'app/options/component/AppOptionWithTable'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyAppOption
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyAppOption

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly renderContent = EMPTY_ARRAY
    public readonly renderTableHeader = null

}
