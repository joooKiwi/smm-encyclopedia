import type {CollectionHolder} from '@joookiwi/collection'

import type {ClearConditionImageFile}   from 'core/entity/file/EntityImageFile'
import type {ClearConditionEntityImage} from 'core/entity/images/ClearConditionEntityImage'
import type {ClearConditionImage}       from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}                from 'core/gameStyle/GameStyles'

import {Empty}             from 'util/emptyVariables'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class ClearConditionEntityImageContainer<const T extends ClearConditionImageFile>
    implements ClearConditionEntityImage<T> {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: ClearConditionImage<T>,) {
        this.#reference = reference
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): CollectionHolder<T> {
        return this.#reference.images
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> {
        return this.#reference.imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle: GameStyles,): CollectionHolder<T> {
        const value = this.imagesWithAssociation.findFirstOrNull(it => it[0] === gameStyle,)
        if (value == null)
            return EMPTY_COLLECTION_HOLDER
        return new ArrayAsCollection([value[1],],)
    }

    //endregion -------------------- Methods --------------------

}
