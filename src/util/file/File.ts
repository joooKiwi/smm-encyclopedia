import type {PossibleImageFileExtension} from 'util/file/image/ImageFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

export interface File<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleFileExtension = PossibleFileExtension, > {

    /** A unique identifier for the file */
    get key(): string

    /** The path of the file */
    get path(): PATH

    /** The file name (without the extension) */
    get name(): NAME

    /** The name of the file with the path & extension. */
    get fullName(): string

    /** The file extension type */
    get extension(): EXTENSION

}

export type PossibleFileExtension = | PossibleImageFileExtension | PossibleSoundFileExtension
