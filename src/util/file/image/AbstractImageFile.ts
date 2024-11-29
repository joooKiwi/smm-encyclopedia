import type {ImageFile, PossibleImageFileExtension} from 'util/file/image/ImageFile'

import {AbstractInternalFile} from 'util/file/AbstractInternalFile'

/** The base of every kind of {@link ImageFile} implementations */
export abstract class AbstractImageFile<const PATH extends string = string,
    const NAME extends string = string,
    const EXTENSION extends PossibleImageFileExtension = PossibleImageFileExtension,
    const FALLBACK_NAME extends string = string, >
    extends AbstractInternalFile<PATH, NAME, EXTENSION>
    implements ImageFile<PATH, NAME, EXTENSION, FALLBACK_NAME> {

    //region -------------------- Fields --------------------

    readonly #fallbackName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, fallbackName: FALLBACK_NAME,) {
        super(path, name, extension,)
        this.#fallbackName = fallbackName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected _createKey(): string {
        return `${this.fullName} (${this.fallbackName})`
    }

    public get fallbackName() {
        return this.#fallbackName
    }

    //endregion -------------------- Getter methods --------------------

}
