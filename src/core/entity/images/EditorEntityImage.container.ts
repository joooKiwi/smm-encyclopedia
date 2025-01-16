import type {CollectionHolder} from '@joookiwi/collection'
import type {Nullable}         from '@joookiwi/type'

import type {EditorImageFile}   from 'core/entity/file/EntityImageFile'
import type {EditorEntityImage} from 'core/entity/images/EditorEntityImage'
import type {EditorImage}       from 'core/entity/images/editor/EditorImage'
import type {GameStyles}        from 'core/gameStyle/GameStyles'
import type {Themes}            from 'core/theme/Themes'
import type {Times}             from 'core/time/Times'

export class EditorEntityImageContainer<const T extends EditorImageFile, >
    implements EditorEntityImage<T> {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: EditorImage<T>,) {
        this.#reference = reference
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): CollectionHolder<T> {
        return this.#reference.images
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [Times, GameStyles, Themes, T,]> {
        return this.#reference.imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle?: Nullable<GameStyles>,): CollectionHolder<T> {
        return this.#reference.getFromGameStyle(gameStyle,)
    }

    //endregion -------------------- Methods --------------------

}
