import type {PossibleImageFileExtension} from 'util/file/image/ImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class SimpleImageFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension, FALLBACK_NAME extends string = string, >
    extends AbstractImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(path, name, extension, fallbackName,)
    }

}
