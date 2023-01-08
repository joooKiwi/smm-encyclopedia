import type {EntityImageFile} from 'core/entity/file/EntityImageFile'

export interface UnusedSMM1ImageFile<PATH extends string = string, NAME extends string = string, FALLBACK_NAME extends string = string, >
    extends EntityImageFile<ImageFilePath<PATH>, NAME, 'tiff', PossibleUnusedSMM1EntityImageFallbackName<FALLBACK_NAME>> {
}

export type ImageFilePath<PATH extends string = string, > = `unused/${PATH}`
export type PossibleUnusedSMM1EntityImageFallbackName<FALLBACK_NAME extends string = string, > = `Unused ${FALLBACK_NAME}`
