import type {ClassWithEntityEnglishName}                                                          from 'core/ClassWithEnglishName'
import type {EntityImageFile, ImageFileExtension, ImageFilePath, PossibleEntityImageFallbackName} from 'core/entity/file/EntityImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export abstract class AbstractEntityImageFile<PATH extends string, NAME extends string, EXTENSION extends ImageFileExtension, FALLBACK_NAME extends string, >
    extends AbstractImageFile<ImageFilePath<PATH>, NAME, EXTENSION, PossibleEntityImageFallbackName<FALLBACK_NAME>>
    implements EntityImageFile {

    protected constructor(entity: ClassWithEntityEnglishName, path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(`entity/${path}`, name, extension, `${entity.englishName} (${fallbackName})`,)
    }

}
