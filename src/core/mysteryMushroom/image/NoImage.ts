import {Image} from './Image';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';

/**
 * @singleton
 */
export class NoImage
    implements Image<never> {

    //region -------------------- Singleton usage --------------------

    static #instance?: NoImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ARRAY_2 = [EMPTY_ARRAY, EMPTY_ARRAY,] as const;
    static readonly #EMPTY_ARRAY_3 = [EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY,] as const;
    static readonly #EMPTY_ARRAY_6 = [EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY, EMPTY_ARRAY,] as const;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    public readonly waitingImages = EMPTY_ARRAY;
    public readonly tauntImages = EMPTY_ARRAY;
    public readonly downImages = EMPTY_ARRAY;
    public readonly walkImages = NoImage.#EMPTY_ARRAY_3;
    public readonly runningImages = NoImage.#EMPTY_ARRAY_3;
    public readonly swimmingImages = NoImage.#EMPTY_ARRAY_6;
    public readonly jumpImages = NoImage.#EMPTY_ARRAY_3;
    public readonly fallingAfterJumpImages = EMPTY_ARRAY;
    public readonly turningImages = EMPTY_ARRAY;
    public readonly climbingImages = NoImage.#EMPTY_ARRAY_2;
    public readonly goalPoleImages = NoImage.#EMPTY_ARRAY_2;

    //endregion -------------------- Getter methods --------------------

}
