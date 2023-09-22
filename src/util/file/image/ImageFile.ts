import type {File} from 'util/file/File'

export interface ImageFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension,
    out FALLBACK_NAME extends string = string, >
    extends File<PATH, NAME, EXTENSION> {

    get fallbackName(): FALLBACK_NAME

}

/** The possible extension for an "image file" in the project */
export type PossibleImageFileExtension = | 'png' | 'tiff' | 'jpg' | 'svg'
