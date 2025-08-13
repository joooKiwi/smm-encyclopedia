import type {Language} from 'lang/name/container/Language'

/**
 * An empty {@link Language} that holds noting in its singleton
 *
 * @singleton
 */
export class EmptyLanguage
    implements Language<null> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLanguage

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly type = 'empty'
    public readonly all = null
    public readonly first = null
    public readonly second = null

}
