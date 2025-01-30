import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile}     from 'core/entity/file/EntityImageFile'
import type {InGameEntityImage}   from 'core/entity/images/InGameEntityImage'
import type {InGameImage_Regular} from 'core/entity/images/inGame/InGameImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class InGameEntityImageContainer<const T extends InGameImageFile, >
    implements InGameEntityImage<T> {

    readonly #reference

    public constructor(reference: InGameImage_Regular<T>,) { this.#reference = reference }

    public get images(): CollectionHolder<T> { return this.#reference.images }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> { return this.#reference.imagesWithAssociation }

    public get(gameStyle: GameStyles,): CollectionHolder<T> { return this.#reference.get(gameStyle,) }
    public getSmb(): CollectionHolder<T> { return this.#reference.getSmb() }
    public getSmb3(): CollectionHolder<T> { return this.#reference.getSmb3() }
    public getSmw(): CollectionHolder<T> { return this.#reference.getSmw() }
    public getNsmbu(): CollectionHolder<T> { return this.#reference.getNsmbu() }
    public getSm3dw(): CollectionHolder<T> { return this.#reference.getSm3dw() }

}
