import type {EntityImageFile, ImageFileExtension} from 'core/entity/file/EntityImageFile'

export interface InGameImageFile<PATH extends string = string, NAME extends string = string, EXTENSION extends ImageFileExtension = ImageFileExtension, FALLBACK_NAME extends string = string, >
    extends EntityImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {}
