import type {CollectionHolder}                     from '@joookiwi/collection'

import type {UnusedSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'
import type {UnusedImage_BigMushroom}         from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer<const T extends UnusedSmm1ImageFile_BigMushroom, >
    implements UnusedImage_BigMushroom<T> {

    readonly #images

    public constructor(images: CollectionHolder<T>,) {
        this.#images = images
    }

    public get images(): CollectionHolder<T> {
        return this.#images
    }

}
