import type {BasePath}                   from 'variables'
import type {PossibleImageFileExtension} from 'util/file/image/ImageFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

export interface File<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleFileExtension = PossibleFileExtension, > {

    /** A unique identifier for the file */
    get key(): string

    /** The path of the file (excluding the {@link BasePath}) */
    get path(): PATH

    /** The path of the file (including the {@link BasePath}) */
    get fullPath(): FullFilePath<PATH>

    /** The file name (without the extension) */
    get name(): NAME

    /** The name of the file with the path & extension. */
    get fullName(): FullFileName<PATH, NAME, EXTENSION>

    /** The file extension type */
    get extension(): EXTENSION

}

export type FullFilePath<PATH extends string = string, > = `/${BasePath}/${PATH}`
export type FullFileName<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleFileExtension = PossibleFileExtension, > = `${FullFilePath<PATH>}/${NAME}.${EXTENSION}`

export type PossibleFileExtension = | PossibleImageFileExtension | PossibleSoundFileExtension
