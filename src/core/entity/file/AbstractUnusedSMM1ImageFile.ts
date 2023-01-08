import type {ClassWithEntityEnglishName}                                                    from 'core/ClassWithEnglishName'
import type {ImageFilePath, PossibleUnusedSMM1EntityImageFallbackName, UnusedSMM1ImageFile} from 'core/entity/file/UnusedSMM1ImageFile'

import {AbstractEntityImageFile} from 'core/entity/file/AbstractEntityImageFile'

export class AbstractUnusedSMM1ImageFile<PATH extends string, NAME extends string, FALLBACK_NAME extends string, >
    extends AbstractEntityImageFile<ImageFilePath<PATH>, NAME, 'tiff', PossibleUnusedSMM1EntityImageFallbackName<FALLBACK_NAME>>
    implements UnusedSMM1ImageFile {

    protected constructor(entity: ClassWithEntityEnglishName, path: PATH, name: NAME, fallbackName: FALLBACK_NAME,) {
        super(entity, `unused/${path}`, name, 'tiff', `Unused ${fallbackName}`,)
    }

}