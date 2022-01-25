/**
 * A global {@link Themes} option that contain the default value, the day value & the night value.
 */
export class GlobalThemeOption {

    //region -------------------- Attributes --------------------

    public static readonly DEFAULT_VALUE = true;
    public static readonly DEFAULT_DAY_VALUE = null;
    public static readonly DEFAULT_NIGHT_VALUE = null;

    readonly #value;
    readonly #dayValue;
    readonly #nightValue;

    //endregion -------------------- Attributes --------------------

    /**
     * A constructor that create the global theme option with the default values.
     *
     * Note that this constructor should only be used in {@link GlobalAppOption} initialisation.
     */
    public constructor()
    /**
     * A constructor that create the global theme option with specified values.
     * It is used when changing the state of the application.
     * It has the day & night value separated.
     *
     * @param value the value (overridden)
     * @param dayValue the day value
     * @param nightValue the night value
     */
    public constructor(value: null, dayValue: boolean, nightValue: boolean,)
    /**
     * A constructor that create the global theme option with specified values.
     * It is used when changing the state of the application.
     * It has the value for both day & night values inherently.
     *
     * @param value the value
     */
    public constructor(value: boolean,)
    public constructor(value: | boolean | null = GlobalThemeOption.DEFAULT_VALUE, dayValue: | boolean | null = GlobalThemeOption.DEFAULT_DAY_VALUE, nightValue: | boolean | null = GlobalThemeOption.DEFAULT_NIGHT_VALUE,) {
        this.#value = value;
        this.#dayValue = dayValue;
        this.#nightValue = nightValue;
    }

    //region -------------------- Getter methods --------------------

    public get value() {
        return this.#value;
    }

    public get dayValue() {
        return this.#dayValue;
    }

    public get nightValue() {
        return this.#nightValue;
    }

    //endregion -------------------- Getter methods --------------------

}
