import type {CollectionHolder}    from '@joookiwi/collection'

import type {UnusedImageFile}     from 'core/entity/file/EntityImageFile'
import type {UnusedImage_Regular} from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer<const T extends UnusedImageFile, >
    implements UnusedImage_Regular {

    #images?: CollectionHolder<T>
    readonly #imagesWithAssociation

    public constructor(images: CollectionHolder<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): CollectionHolder<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],)
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }

    public get(gameStyle: GameStyles,): CollectionHolder<T> {
        return this.imagesWithAssociation.filter(it => it[0] === gameStyle,).map(it => it[1],)
    }

}
