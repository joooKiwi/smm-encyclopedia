import type {Array}    from '@joookiwi/type'
import {findOrNullByArray} from '@joookiwi/collection'

import type {EntityImage}     from 'core/entity/images/EntityImage'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

import {Empty} from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

export class MixedReferenceEntityImage<const T extends EntityImageFile, >
    implements EntityImage<T> {

    //region -------------------- Fields --------------------

    #images?: Array<T>
    readonly #imagesWithAssociation

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: Array<readonly [GameStyles, Array<T>,]>,) {
        this.#imagesWithAssociation = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): Array<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],).flat()
    }

    public get imagesWithAssociation(): Array<readonly [GameStyles, Array<T>,]> {
        return this.#imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle: GameStyles,): Array<T> {
        return findOrNullByArray(this.imagesWithAssociation, it => it[0] === gameStyle,)?.[1] ?? EMPTY_ARRAY
    }

    //endregion -------------------- Methods --------------------

}
