import type {File} from 'util/file/File'

export interface ImageFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension, FALLBACK_NAME extends string = string, >
    extends File<PATH, NAME, EXTENSION> {

    get fallbackName(): FALLBACK_NAME

}

/** The possible extension for an "image file" in the project */
export type PossibleImageFileExtension = | 'png' | 'tiff' | 'jpg' | 'svg'
