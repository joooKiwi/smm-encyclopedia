import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile}     from 'core/entity/file/EntityImageFile'
import type {InGameEntityImage}   from 'core/entity/images/InGameEntityImage'
import type {InGameImage_Regular} from 'core/entity/images/inGame/InGameImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class InGameEntityImageContainer<const T extends InGameImageFile, >
    implements InGameEntityImage<T> {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: InGameImage_Regular<T>,) {
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
        return this.#reference.get(gameStyle,)
    }

    //endregion -------------------- Methods --------------------

}
