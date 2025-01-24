import type {BasePath}                    from 'variables'
import type {File, PossibleFileExtension} from 'util/file/File'

export interface InternalFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleFileExtension = PossibleFileExtension, >
    extends File<PATH, NAME, EXTENSION> {

    /** The path of the file (excluding the {@link BasePath}) */
    get path(): PATH

    /** The path of the file (including the {@link BasePath}) */
    get fullPath(): FullFilePath<PATH>

    get fullName(): FullFileName<PATH, NAME, EXTENSION>

}

export type FullFilePath<PATH extends string = string, > = `/${PATH}`
export type FullFileName<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleFileExtension = PossibleFileExtension, > = `${FullFilePath<PATH>}/${NAME}.${EXTENSION}`

