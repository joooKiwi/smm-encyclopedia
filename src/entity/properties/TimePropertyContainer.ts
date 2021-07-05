import type {ExclusiveSMM2TimeProperty} from './exclusive/ExclusiveSMM2TimeProperty';
import type {TimeProperty}              from './TimeProperty';

import {Times}                     from '../time/Times';

/**
 * @multiton
 * @provider
 */
export class TimePropertyContainer
    implements TimeProperty {

    //region -------------------- predefined containers --------------------

    static readonly #IS_IN_ONLY_SMM1_OR_SM3DW_PROPERTY = new TimePropertyContainer(true,  null, );

    static readonly #IS_IN_ONLY_DAY_THEME_PROPERTY =     new TimePropertyContainer(true,  false,) as ExclusiveSMM2TimeProperty;
    static readonly #IS_IN_ONLY_NIGHT_THEME_PROPERTY =   new TimePropertyContainer(false, true, ) as ExclusiveSMM2TimeProperty;

    static readonly #IS_IN_BOTH_TIMES_PROPERTY =         new TimePropertyContainer(true,  true, ) as ExclusiveSMM2TimeProperty;
    static readonly #IS_IN_NO_TIMES_PROPERTY =           new TimePropertyContainer(false, false,);

    //endregion -------------------- predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInDayTheme;
    readonly #isInNightTheme;

    private constructor(isInDayTheme: boolean, isInNightTheme: null | boolean,) {
        this.#isInDayTheme = isInDayTheme;
        this.#isInNightTheme = isInNightTheme;
    }


    public get isInDayTheme() {
        return this.#isInDayTheme;
    }

    public get isInNightTheme() {
        return this.#isInNightTheme;
    }

    public toTimeMap(): Map<Times, boolean> {
        return new Map(Times.values.map(time => [time, time.get(this),]));
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider/Multiton method --------------------

    public static get(isInDayTheme: true, isInNightTheme: null,): TimeProperty
    public static get(isInDayTheme: false, isInNightTheme: true,): ExclusiveSMM2TimeProperty
    public static get(isInDayTheme: true, isInNightTheme: false,): ExclusiveSMM2TimeProperty
    public static get(isInDayTheme: true, isInNightTheme: true,): ExclusiveSMM2TimeProperty
    public static get(isInDayTheme: boolean, isInNightTheme: null | boolean,): TimeProperty
    /**
     * <p>
     *     Return the property instance based on the booleans values received.
     *     Note that it does not duplicate the class creation, but only give a predefined instance.
     * </p>
     *
     * The result vary based on the values received.
     * <table>
     *     <tr><th>booleans</th><th>result</th></tr>
     *     <tr><td>true & true</td> <td>A property in every times ({@link Times.DAY} or {@link Times.NIGHT}) & in the game {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>true & null</td> <td>A property only in {@link Games.SUPER_MARIO_MAKER_1} or only in {@link GameStyles.SUPER_MARIO_3D_WORLD}</td></tr>
     *     <tr><td>false & true</td><td>A property only in {@link Times.NIGHT} & in the game {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>true & false</td><td>A property only in {@link Times.DAY} & in the game {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>false & false</td><td>A property where it is in no times.</td></tr>
     * </table>
     *
     * @param isInDayTheme
     * @param isInNightTheme
     */
    public static get(isInDayTheme: boolean, isInNightTheme: null | boolean,): TimeProperty {
        if (isInDayTheme)
            switch (isInNightTheme) {
                case true:
                    return this.#IS_IN_BOTH_TIMES_PROPERTY;
                case false:
                    return this.#IS_IN_ONLY_DAY_THEME_PROPERTY;
                case null:
                    return this.#IS_IN_ONLY_SMM1_OR_SM3DW_PROPERTY;
            }
        if (isInNightTheme === true)
            return this.#IS_IN_ONLY_NIGHT_THEME_PROPERTY;
        return this.#IS_IN_NO_TIMES_PROPERTY;
    }

    //endregion -------------------- Provider/Multiton method --------------------

}
