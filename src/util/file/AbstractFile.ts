import type {FullFileName, FullFilePath, PossibleFileExtension} from 'util/file/File'

import {BASE_PATH} from 'variables'

export abstract class AbstractFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleFileExtension = PossibleFileExtension, > {

    //region -------------------- Fields --------------------

    #key?: string

    readonly #path
    #fullPath?: FullFilePath<PATH>
    readonly #name
    #fullName?: FullFileName<PATH, NAME, EXTENSION>
    readonly #extension

    //endregion -------------------- Fields --------------------

    protected constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        this.#path = path
        this.#name = name
        this.#extension = extension
    }

    //region -------------------- Getter methods --------------------

    public get key(): string {
        return this.#key ??= this._createKey()
    }

    protected abstract _createKey(): string

    public get path(): PATH {
        return this.#path
    }

    public get fullPath(): FullFilePath<PATH> {
        return this.#fullPath ??= `/${BASE_PATH}/${this.path}`
    }

    public get name(): NAME {
        return this.#name
    }

    public get fullName(): FullFileName<PATH, NAME, EXTENSION> {
        return this.#fullName ??= `${this.fullPath}/${this.name}.${this.extension}`
    }

    public get extension(): EXTENSION {
        return this.#extension
    }

    //endregion -------------------- Getter methods --------------------

}
