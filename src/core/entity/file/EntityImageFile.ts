import {PossibleEnglishName} from 'core/entity/Entities.types'
import type {ImageFile}      from 'util/file/image/ImageFile'

export interface EntityImageFile<PATH extends string = string, NAME extends string = string, EXTENSION extends ImageFileExtension = ImageFileExtension, FALLBACK_NAME extends string = string, >
    extends ImageFile<ImageFilePath<PATH>, NAME, EXTENSION, PossibleEntityImageFallbackName<FALLBACK_NAME>> {
}

export type ImageFilePath<PATH extends string = string, > = `entity/${PATH}`
export type ImageFileExtension = | 'tiff' | 'png'
export type PossibleEntityImageFallbackName<FALLBACK_NAME extends string = string, > = `${PossibleEnglishName} (${FALLBACK_NAME})`
