/**
 * A global {@link Themes} option
 * with the day value & the night value.
 */
export class GlobalThemeOption {

    //region -------------------- Fields --------------------

    /**
     * A global theme on the {@link Times.DAY day time} & the {@link Times.NIGHT night time}.
     */
    public static readonly ALL =   new GlobalThemeOption(true, true,)
    /**
     * A global theme on only the {@link Times.DAY day time}.
     */
    public static readonly DAY =   new GlobalThemeOption(true, false,)
    /**
     * A global theme on only the {@link Times.NIGHT night time}.
     */
    public static readonly NIGHT = new GlobalThemeOption(false, true,)
    /**
     * A global theme on no {@link Times time}.
     */
    public static readonly NONE =  new GlobalThemeOption(false, false,)

    readonly #dayValue
    readonly #nightValue

    //endregion -------------------- Fields --------------------

    private constructor(dayValue: boolean, nightValue: boolean,) {
        this.#dayValue = dayValue
        this.#nightValue = nightValue
    }

    //region -------------------- Getter methods --------------------

    public get dayValue(): boolean {
        return this.#dayValue
    }

    public get nightValue(): boolean {
        return this.#nightValue
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Method --------------------

    /**
     * Reverse the {@link Times.NIGHT night} value.
     */
    public onNight(): GlobalThemeOption
    /**
     * Add or remove the {@link Times.NIGHT night} property
     * by returning a predefined instance.
     *
     * @param add_or_remove add = true, remove = false
     */
    public onNight(add_or_remove: boolean,): GlobalThemeOption
    public onNight(add_or_remove_or_reverse?: boolean,): GlobalThemeOption {
        return add_or_remove_or_reverse == null
            ? this.dayValue
                ? this.nightValue
                    ? GlobalThemeOption.DAY
                    : GlobalThemeOption.ALL
                : this.nightValue
                    ? GlobalThemeOption.NONE
                    : GlobalThemeOption.NIGHT
            : add_or_remove_or_reverse
                ? this.dayValue
                    ? GlobalThemeOption.ALL
                    : GlobalThemeOption.NIGHT
                : this.dayValue
                    ? GlobalThemeOption.DAY
                    : GlobalThemeOption.NONE
    }

    public get reverseNightValue(): GlobalThemeOption {
        return this.onNight()
    }

    public get addNight(): GlobalThemeOption {
        return this.onNight(true)
    }

    public get removeNight(): GlobalThemeOption {
        return this.onNight(false)
    }


    /**
     * Reverse the {@link Times.DAY day} value
     */
    public onDay(): GlobalThemeOption
    /**
     * Add or remove the {@link Times.DAY day} property
     * by returning a predefined instance.
     *
     * @param add_or_remove add = true, remove = false
     */
    public onDay(add_or_remove: boolean,): GlobalThemeOption
    public onDay(add_or_remove_or_reverse?: boolean,): GlobalThemeOption {
        return add_or_remove_or_reverse == null
            ? this.nightValue
                ? this.dayValue
                    ? GlobalThemeOption.NIGHT
                    : GlobalThemeOption.ALL
                : this.dayValue
                    ? GlobalThemeOption.NONE
                    : GlobalThemeOption.DAY
            : add_or_remove_or_reverse
                ? this.nightValue
                    ? GlobalThemeOption.ALL
                    : GlobalThemeOption.DAY
                : this.nightValue
                    ? GlobalThemeOption.NIGHT
                    : GlobalThemeOption.NONE
    }

    public get reverseDayValue(): GlobalThemeOption {
        return this.onDay()
    }

    public get addDay(): GlobalThemeOption {
        return this.onDay(true)
    }

    public get removeDay(): GlobalThemeOption {
        return this.onDay(false)
    }


    /**
     * Set to all or none.
     *
     * @param isAllOrNone all = true, none = false,
     */
    public set(isAllOrNone: boolean,): GlobalThemeOption {
        return isAllOrNone ? GlobalThemeOption.ALL : GlobalThemeOption.NONE
    }

    //region -------------------- Method --------------------

}
