import type {Array}             from '@joookiwi/type'
import {findFirstOrNullByArray} from '@joookiwi/collection'

import type {ClearConditionImageFile}   from 'core/entity/file/EntityImageFile'
import type {ClearConditionEntityImage} from 'core/entity/images/ClearConditionEntityImage'
import type {ClearConditionImage}       from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}                from 'core/gameStyle/GameStyles'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

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

    public get images(): Array<T> {
        return this.#reference.images
    }

    public get imagesWithAssociation(): Array<readonly [GameStyles, T,]> {
        return this.#reference.imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle: GameStyles,): Array<T> {
        const value = findFirstOrNullByArray(this.imagesWithAssociation, it => it[0] === gameStyle,)
        if (value == null)
            return EMPTY_ARRAY
        return [value[1],]
    }

    //endregion -------------------- Methods --------------------

}
