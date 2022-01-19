import type {UnusedImage_BigMushroom} from './UnusedImage_BigMushroom';

export class UnusedImage_BigMushroomContainer
    implements UnusedImage_BigMushroom {

    //region -------------------- Attributes --------------------

    readonly #all: readonly (readonly string[])[];

    //endregion -------------------- Attributes --------------------

    public constructor(images: readonly (readonly string[])[]) {
        this.#all = images;
    }

    //region -------------------- Getter methods --------------------

    public get all() {
        return this.#all;
    }

    //endregion -------------------- Getter methods --------------------

}
