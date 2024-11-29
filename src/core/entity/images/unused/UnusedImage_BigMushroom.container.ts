import type {Array} from '@joookiwi/type'

import type {UnusedSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'
import type {UnusedImage_BigMushroom}         from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer<const T extends UnusedSmm1ImageFile_BigMushroom, >
    implements UnusedImage_BigMushroom<T> {

    readonly #all

    public constructor(images: Array<T>,) {
        this.#all = images
    }

    public get all(): Array<T> {
        return this.#all
    }

}
