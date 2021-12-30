import type {AngryImages_ClownCar, BlinkingImages_ClownCar, DamagingImages_Goomba, EveryImages_ClownCar, EveryImages_Goomba, EveryImages_Stretch, InBootImages_Goomba, MovingImages_Stretch, SwimmingImages_Goomba, UnusedBigMushroomImage, WaitImages_Stretch, WaitingImages_ClownCar, WalkingImages_Goomba, WeepingImages_ClownCar} from './UnusedBigMushroomImage';
import {EMPTY_ARRAY}                                                                                                                                                                                                                                                                                                                  from '../../../../util/emptyVariables';

export class UnusedBigMushroomImageContainer
    implements UnusedBigMushroomImage {

    //region -------------------- Attributes --------------------

    readonly #waitImages;
    readonly #angryImages;
    readonly #blinkingImages;
    readonly #weepingImages;
    readonly #damagingImages;
    readonly #swimmingImages;
    readonly #walkingImages;
    readonly #inBootImages;
    readonly #movingImages;

    readonly #all: | EveryImages_ClownCar | EveryImages_Goomba | EveryImages_Stretch;

    //endregion -------------------- Attributes --------------------

    public constructor(...images: ClownCarImagesReceived)
    public constructor(...images: GoombaImagesReceived)
    public constructor(...images: StretchImagesReceived)
    public constructor(...images: | ClownCarImagesReceived | GoombaImagesReceived | StretchImagesReceived) {
        const [waitImages_clownCar, angryImages, blinkingImages, weepingImages, damagingImages, swimmingImages, walkingImages, inBootImages, waitImages_stretch, movingImages,] = images;
        this.#waitImages = waitImages_clownCar ?? waitImages_stretch ?? EMPTY_ARRAY;
        this.#angryImages = angryImages ?? EMPTY_ARRAY;
        this.#blinkingImages = blinkingImages ?? EMPTY_ARRAY;
        this.#weepingImages = weepingImages ?? EMPTY_ARRAY;
        this.#damagingImages = damagingImages ?? EMPTY_ARRAY;
        this.#swimmingImages = swimmingImages ?? EMPTY_ARRAY;
        this.#walkingImages = walkingImages ?? EMPTY_ARRAY;
        this.#inBootImages = inBootImages ?? EMPTY_ARRAY;
        this.#movingImages = movingImages ?? EMPTY_ARRAY;

        this.#all = [...images,].filter(image => image != null) as unknown as | EveryImages_ClownCar | EveryImages_Goomba | EveryImages_Stretch;
    }

    //region -------------------- Getter methods --------------------

    public get waitImages(): | WaitingImages_ClownCar | WaitImages_Stretch | EmptyArray {
        return this.#waitImages;
    }

    public get angryImages(): | AngryImages_ClownCar | EmptyArray {
        return this.#angryImages;
    }

    public get blinkingImages(): | BlinkingImages_ClownCar | EmptyArray {
        return this.#blinkingImages;
    }

    public get weepingImages(): | WeepingImages_ClownCar | EmptyArray {
        return this.#weepingImages;
    }

    public get damagingImages(): | DamagingImages_Goomba | EmptyArray {
        return this.#damagingImages;
    }

    public get swimmingImages(): | SwimmingImages_Goomba | EmptyArray {
        return this.#swimmingImages;
    }

    public get walkingImages(): | WalkingImages_Goomba | EmptyArray {
        return this.#walkingImages;
    }

    public get movingImages(): | MovingImages_Stretch | EmptyArray {
        return this.#movingImages;
    }

    public get inBootImages(): | InBootImages_Goomba | EmptyArray {
        return this.#inBootImages;
    }


    public get all(): | EveryImages_ClownCar | EveryImages_Goomba | EveryImages_Stretch {
        return this.#all;
    }

    //endregion -------------------- Getter methods --------------------

}

type ClownCarImagesReceived = readonly [
    waitImages_clownCar: WaitingImages_ClownCar, angryImages: AngryImages_ClownCar, blinkingImages: BlinkingImages_ClownCar, weepingImages: WeepingImages_ClownCar,
    damagingImages: null, swimmingImages: null, walkingImages: null, inBootImages: null,
    waitImages_stretch: null, movingImages: null,
];
type GoombaImagesReceived = readonly [
    waitImages_clownCar: null, angryImages: null, blinkingImages: null, weepingImages: null,
    damagingImages: DamagingImages_Goomba, swimmingImages: SwimmingImages_Goomba, walkingImages: WalkingImages_Goomba, inBootImages: InBootImages_Goomba,
    waitImages_stretch: null, movingImages: null,
];
type StretchImagesReceived = readonly [
    waitImages_clownCar: null, angryImages: null, blinkingImages: null, weepingImages: null,
    damagingImages: null, swimmingImages: null, walkingImages: null, inBootImages: null,
    waitImages_stretch: WaitImages_Stretch, movingImages: MovingImages_Stretch,
];
type EmptyArray = typeof EMPTY_ARRAY;
