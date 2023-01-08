import type {ImageFile, PossibleImageFileExtension} from 'util/file/image/ImageFile'

import {AbstractFile} from 'util/file/AbstractFile'

export abstract class AbstractImageFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension, FALLBACK_NAME extends string = string, >
    extends AbstractFile<PATH, NAME, EXTENSION>
    implements ImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {

    //region -------------------- Fields --------------------

    readonly #fallbackName

    //endregion -------------------- Fields --------------------
    protected constructor(path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(path, name, extension,)
        this.#fallbackName = fallbackName
    }

    //region -------------------- Getter methods --------------------

    protected _createKey(): string {
        return `${this.fullName} (${this.fallbackName})`
    }

    public get fallbackName() {
        return this.#fallbackName
    }

    //endregion -------------------- Getter methods --------------------

}
