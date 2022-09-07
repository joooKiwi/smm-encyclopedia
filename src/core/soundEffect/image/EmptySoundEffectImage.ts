import {SoundEffectImage} from './SoundEffectImage';

/**
 * @singleton
 */
export class EmptySoundEffectImage
    implements SoundEffectImage {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySoundEffectImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly SMM1ImagePath = null;
    public readonly SMM2ImagePath = null;

}
