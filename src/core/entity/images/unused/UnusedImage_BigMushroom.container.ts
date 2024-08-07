import type {UnusedSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'
import type {UnusedImage_BigMushroom}         from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer<const out T extends UnusedSmm1ImageFile_BigMushroom, >
    implements UnusedImage_BigMushroom<T> {

    readonly #all

    public constructor(images: readonly T[],) {
        this.#all = images
    }

    public get all(): readonly T[] {
        return this.#all
    }

}
