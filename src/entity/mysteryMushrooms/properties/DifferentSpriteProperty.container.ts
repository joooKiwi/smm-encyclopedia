import {DifferentSpriteProperty} from './DifferentSpriteProperty';

/**
 * @multiton
 * @provider
 */
export class DifferentSpritePropertyContainer
    implements DifferentSpriteProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #HAS_NO_DIFFERENT_SPRITES =  new DifferentSpritePropertyContainer(false, false,);
    static readonly #HAVE_ONLY_JAPANESE_SPRITE = new DifferentSpritePropertyContainer(true,  false,);
    static readonly #HAVE_ONLY_LEFT_SPRITE =     new DifferentSpritePropertyContainer(false, true, );

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #haveADifferentJapaneseSprite;
    readonly #haveADifferentLeftSprite;

    private constructor(haveADifferentJapaneseSprite: boolean, haveADifferentLeftSprite: boolean,) {
        this.#haveADifferentJapaneseSprite = haveADifferentJapaneseSprite;
        this.#haveADifferentLeftSprite = haveADifferentLeftSprite;
    }

    public get haveADifferentJapaneseSprite() {
        return this.#haveADifferentJapaneseSprite;
    }

    public get haveADifferentLeftSprite() {
        return this.#haveADifferentLeftSprite;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(haveADifferentJapaneseSprite: boolean, haveADifferentLeftSprite: boolean,): DifferentSpriteProperty {
        if (haveADifferentJapaneseSprite)
            return this.#HAVE_ONLY_JAPANESE_SPRITE;
        if (haveADifferentLeftSprite)
            return this.#HAVE_ONLY_LEFT_SPRITE;
        return this.#HAS_NO_DIFFERENT_SPRITES;

    }

    //endregion -------------------- Provider / Multiton method --------------------

}
