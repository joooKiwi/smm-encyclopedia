import type {PossibleFileExtension}                    from 'util/file/File'
import type {FullFileName, FullFilePath, InternalFile} from 'util/file/InternalFile'

import {BASE_PATH}    from 'variables'
import {AbstractFile} from 'util/file/AbstractFile'

/** The base class of every {@link InternalFile} implementations */
export abstract class AbstractInternalFile<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleFileExtension = PossibleFileExtension, >
    extends AbstractFile<PATH, NAME, EXTENSION>
    implements InternalFile<PATH, NAME, EXTENSION> {

    #fullPath?: FullFilePath<PATH>
    #fullName?: FullFileName<PATH, NAME, EXTENSION>

    public get fullPath(): FullFilePath<PATH> {
        return this.#fullPath ??= `/${BASE_PATH}/${this.path}`
    }

    public get fullName(): FullFileName<PATH, NAME, EXTENSION> {
        return this.#fullName ??= `${this.fullPath}/${this.name}.${this.extension}`
    }

}
