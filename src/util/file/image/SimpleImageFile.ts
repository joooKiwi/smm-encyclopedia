import type {PossibleImageFileExtension} from 'util/file/image/ImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

/** An implementation of an {@link ImageFile} */
export class SimpleImageFile<const PATH extends string = string,
    const NAME extends string = string,
    const EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension,
    const FALLBACK_NAME extends string = string, >
    extends AbstractImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(path, name, extension, fallbackName,)
    }

}
