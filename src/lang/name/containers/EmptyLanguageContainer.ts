import {EmptyLanguage} from './EmptyLanguage'

/**
 * @singleton
 */
export class EmptyLanguageContainer
    implements EmptyLanguage {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLanguageContainer

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public get isUsed(): false {
        return false
    }

    public get original(): null {
        return null
    }

    public get(): null
    public get<INDEX extends number = number, >(index: INDEX,): null
    public get(): null {
        return null
    }

}
