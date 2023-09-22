import type {UnusedSMM1BigMushroomImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage_BigMushroom}        from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer
    implements UnusedImage_BigMushroom {

    readonly #all

    public constructor(images: readonly (readonly UnusedSMM1BigMushroomImageFile[])[],) {
        this.#all = images
    }

    public get all(): readonly (readonly UnusedSMM1BigMushroomImageFile[])[] {
        return this.#all
    }

}
