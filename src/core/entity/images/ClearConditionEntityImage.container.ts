import type {ClearConditionImageFile}   from 'core/entity/file/EntityImageFile'
import type {ClearConditionEntityImage} from 'core/entity/images/ClearConditionEntityImage'
import type {ClearConditionImage}       from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}                from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class ClearConditionEntityImageContainer<const out T extends ClearConditionImageFile>
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

    public get images(): readonly T[] {
        return this.#reference.images
    }

    public get imagesWithAssociation(): readonly (readonly [GameStyles, T,])[] {
        return this.#reference.imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle: GameStyles,): readonly T[] {
        const images = this.imagesWithAssociation
        const size = images.length
        let index = -1
        while (++index < size)
            if (images[index][0] === gameStyle)
                return [images[index][1],]
        return EMPTY_ARRAY
    }

    //endregion -------------------- Methods --------------------

}
