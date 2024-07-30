import type {ExternalFile, FullFileName} from 'util/file/ExternalFile'
import {AbstractFile}                    from 'util/file/AbstractFile'
import type {PossibleFileExtension}      from 'util/file/File'

export abstract class AbstractExternalFile<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleFileExtension = PossibleFileExtension, >
    extends AbstractFile<PATH, NAME, EXTENSION>
    implements ExternalFile<PATH, NAME, EXTENSION> {

    #fullName?: FullFileName<PATH, NAME, EXTENSION>

    public get fullName(): FullFileName<PATH, NAME, EXTENSION> {
        return this.#fullName ??= `${this.path}/${this.name}.${this.extension}`
    }

}
