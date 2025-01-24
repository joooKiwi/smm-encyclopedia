import type {CollectionHolder} from '@joookiwi/collection'

import type {ClearConditionImageFile}   from 'core/entity/file/EntityImageFile'
import type {ClearConditionEntityImage} from 'core/entity/images/ClearConditionEntityImage'
import type {ClearConditionImage}       from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}                from 'core/gameStyle/GameStyles'

import {AbstractEntityImage} from 'core/entity/images/AbstractEntityImage'
import {Empty}               from 'util/emptyVariables'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class ClearConditionEntityImageContainer<const T extends ClearConditionImageFile, >
    extends AbstractEntityImage<T>
    implements ClearConditionEntityImage<T> {

    readonly #reference

    public constructor(reference: ClearConditionImage<T>,) {
        super()
        this.#reference = reference
    }

    public override get images(): CollectionHolder<T> { return this.#reference.images }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> { return this.#reference.imagesWithAssociation }

    public override _get(gameStyle: GameStyles,): CollectionHolder<T> {
        const value = this.imagesWithAssociation.findFirstOrNull(it => it[0] === gameStyle,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return new ArrayAsCollection([value[1],],)
    }

}
