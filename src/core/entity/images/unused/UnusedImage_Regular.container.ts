import type {UnusedImage_Regular} from './UnusedImage_Regular';
import type {GameStyles}          from '../../../gameStyle/GameStyles';

export class UnusedImage_RegularContainer
    implements UnusedImage_Regular {

    //region -------------------- Attributes --------------------

    readonly #all;

    //endregion -------------------- Attributes --------------------

    public constructor(images: ReadonlyMap<GameStyles, readonly (readonly string[])[]>,) {
        this.#all = images;
    }

    //region -------------------- Getter methods --------------------

    public get all() {
        return this.#all;
    }

    //endregion -------------------- Getter methods --------------------

}
