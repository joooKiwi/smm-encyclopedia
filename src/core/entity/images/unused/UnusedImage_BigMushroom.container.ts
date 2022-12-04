import type {UnusedImage_BigMushroom} from 'core/entity/images/unused/UnusedImage_BigMushroom'

export class UnusedImage_BigMushroomContainer
    implements UnusedImage_BigMushroom {

    //region -------------------- Fields --------------------

    readonly #all: readonly (readonly string[])[]

    //endregion -------------------- Fields --------------------

    public constructor(images: readonly (readonly string[])[],) {
        this.#all = images
    }

    //region -------------------- Getter methods --------------------

    public get all() {
        return this.#all
    }

    //endregion -------------------- Getter methods --------------------

}
