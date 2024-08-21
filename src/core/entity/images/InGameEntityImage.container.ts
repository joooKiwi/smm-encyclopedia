import type {InGameImageFile}   from 'core/entity/file/EntityImageFile'
import type {InGameEntityImage} from 'core/entity/images/InGameEntityImage'
import type {InGameImage}       from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}        from 'core/gameStyle/GameStyles'

export class InGameEntityImageContainer<const out T extends InGameImageFile, >
    implements InGameEntityImage<T> {

    //region -------------------- Fields --------------------

    readonly #reference

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: InGameImage<T>,) {
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
        return this.#reference.get(gameStyle,)
    }

    //endregion -------------------- Methods --------------------

}
