import type {File, PossibleFileExtension} from 'util/file/File'

/** The base class of every {@link File} implementations */
export abstract class AbstractFile<const PATH extends string = string,
    const NAME extends string = string,
    const EXTENSION extends PossibleFileExtension = PossibleFileExtension, >
    implements File<PATH, NAME, EXTENSION> {

    //region -------------------- Fields --------------------

    #key?: string

    readonly #path
    readonly #name
    readonly #extension

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        this.#path = path
        this.#name = name
        this.#extension = extension
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get key(): string {
        return this.#key ??= this._createKey()
    }

    protected abstract _createKey(): string

    public get path(): PATH {
        return this.#path
    }

    public get name(): NAME {
        return this.#name
    }

    public abstract get fullName(): string

    public get extension(): EXTENSION {
        return this.#extension
    }

    //endregion -------------------- Getter methods --------------------

}
