import type {UnusedSMM1BigMushroomImageFile} from 'core/entity/file/UnusedSMM1BigMushroomImageFile'
import type {UnusedImage_BigMushroom}        from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer
    implements UnusedImage_BigMushroom {

    //region -------------------- Fields --------------------

    readonly #all

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: readonly (readonly UnusedSMM1BigMushroomImageFile[])[],) {
        this.#all = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get all(): readonly (readonly UnusedSMM1BigMushroomImageFile[])[] {
        return this.#all
    }

    //endregion -------------------- Getter methods --------------------

}
