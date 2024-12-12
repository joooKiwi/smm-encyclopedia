import type {CollectionHolder} from '@joookiwi/collection'

import type {EntityImage}     from 'core/entity/images/EntityImage'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

import {Empty}             from 'util/emptyVariables'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class MixedReferenceEntityImage<const T extends EntityImageFile, >
    implements EntityImage<T> {

    //region -------------------- Fields --------------------

    #images?: CollectionHolder<T>
    readonly #imagesWithAssociation

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: CollectionHolder<readonly [GameStyles, CollectionHolder<T>,]>,) {
        this.#imagesWithAssociation = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): CollectionHolder<T> {
        return this.#images ??= new ArrayAsCollection(this.imagesWithAssociation.map(it => it[1].toArray(),).toArray().flat(),)
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, CollectionHolder<T>,]> {
        return this.#imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle: GameStyles,): CollectionHolder<T> {
        return this.imagesWithAssociation.findFirstOrNull(it => it[0] === gameStyle,)?.[1] ?? EMPTY_COLLECTION_HOLDER
    }

    //endregion -------------------- Methods --------------------

}
