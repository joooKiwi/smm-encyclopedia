import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile}     from 'core/entity/file/EntityImageFile'
import type {InGameEntityImage}   from 'core/entity/images/InGameEntityImage'
import type {InGameImage_Regular} from 'core/entity/images/inGame/InGameImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

import {AbstractEntityImage} from 'core/entity/images/AbstractEntityImage'

export class InGameEntityImageContainer<const T extends InGameImageFile, >
    extends AbstractEntityImage<T>
    implements InGameEntityImage<T> {

    readonly #reference

    public constructor(reference: InGameImage_Regular<T>,) {
        super()
        this.#reference = reference
    }

    public override get images(): CollectionHolder<T> { return this.#reference.images }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> { return this.#reference.imagesWithAssociation }

    public override _get(gameStyle: GameStyles,): CollectionHolder<T> {
        return this.#reference.get(gameStyle,)
    }

}
