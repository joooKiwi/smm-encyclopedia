import type {EveryImages_Stretch, OutImages_Stretch, UnusedImage_Regular, WaitingImages_Stretch} from './UnusedImage_Regular';

export class UnusedImage_RegularContainer
    implements UnusedImage_Regular {

    //region -------------------- Attributes --------------------

    #all?: EveryImages_Stretch;
    readonly #outImages;
    readonly #waitingImages;

    //endregion -------------------- Attributes --------------------

    public constructor(outImages: OutImages_Stretch, waitingImages: WaitingImages_Stretch,) {
        this.#outImages = outImages;
        this.#waitingImages = waitingImages;
    }

    //region -------------------- Getter methods --------------------

    public get outImages(): OutImages_Stretch {
        return this.#outImages;
    }

    public get waitingImages(): WaitingImages_Stretch {
        return this.#waitingImages;
    }

    public get all(): EveryImages_Stretch {
        return this.#all ??= [this.outImages, this.waitingImages,];
    }

    //endregion -------------------- Getter methods --------------------

}
