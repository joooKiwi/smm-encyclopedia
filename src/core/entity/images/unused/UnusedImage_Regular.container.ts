import type {UnusedImage_Regular} from 'core/entity/images/unused/UnusedImage_Regular'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class UnusedImage_RegularContainer
    implements UnusedImage_Regular {

    //region -------------------- Fields --------------------

    readonly #all

    //endregion -------------------- Fields --------------------

    public constructor(images: ReadonlyMap<GameStyles, readonly (readonly string[])[]>,) {
        this.#all = images
    }

    //region -------------------- Getter methods --------------------

    public get all() {
        return this.#all
    }

    //endregion -------------------- Getter methods --------------------

}
