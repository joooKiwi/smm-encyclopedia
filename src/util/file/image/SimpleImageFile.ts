import type {PossibleImageFileExtension} from 'util/file/image/ImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

/** A simple implementation of an {@link ImageFile} */
export class SimpleImageFile<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension,
    const out FALLBACK_NAME extends string = string, >
    extends AbstractImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(path, name, extension, fallbackName,)
    }

}
