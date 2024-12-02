import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'
import type {InGameImage_BigMushroom}         from 'core/entity/images/inGame/InGameImage_BigMushroom'

export class InGameImage_BigMushroomContainer<const T extends InGameSmm1ImageFile_BigMushroom, >
    implements InGameImage_BigMushroom<T> {

    readonly #all

    public constructor(images: CollectionHolder<T>,) {
        this.#all = images
    }

    public get images(): CollectionHolder<T> {
        return this.#all
    }

}
