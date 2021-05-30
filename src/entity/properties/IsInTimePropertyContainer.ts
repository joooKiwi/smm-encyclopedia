import {IsInOnlySMM2TimeProperty} from './IsInOnlySMM2TimeProperty';
import {IsInOnlySMM1TimeProperty} from './IsInOnlySMM1TimeProperty';
import {IsInTimeProperty}         from './IsInTimeProperty';
import {Times}                    from '../time/Times';

/**
 * @multiton
 * @provider
 */
export class IsInTimePropertyContainer
    implements IsInTimeProperty {

    //region -------------------- predefined containers --------------------
    private static readonly __IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY = new IsInTimePropertyContainer(true, null,) as IsInOnlySMM1TimeProperty;

    private static readonly __IS_IN_ONLY_DAY_THEME_PROPERTY = new IsInTimePropertyContainer(true, false,) as IsInOnlySMM2TimeProperty;
    private static readonly __IS_IN_ONLY_NIGHT_THEME_PROPERTY = new IsInTimePropertyContainer(false, true,) as IsInOnlySMM2TimeProperty;

    private static readonly __IS_IN_BOTH_TIMES_PROPERTY = new IsInTimePropertyContainer(true, true,) as IsInOnlySMM2TimeProperty;
    private static readonly __IS_IN_NO_TIMES_PROPERTY = new IsInTimePropertyContainer(false, false,);

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

    public static get(isInDayTheme: true, isInNightTheme: null,): IsInOnlySMM1TimeProperty
    public static get(isInDayTheme: false, isInNightTheme: true,): IsInOnlySMM2TimeProperty
    public static get(isInDayTheme: true, isInNightTheme: false,): IsInOnlySMM2TimeProperty
    public static get(isInDayTheme: true, isInNightTheme: true,): IsInOnlySMM2TimeProperty
    public static get(isInDayTheme: boolean, isInNightTheme: null | boolean,): IsInTimeProperty
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
     *     <tr><td>true & null</td> <td>A property only in {@link Games.SUPER_MARIO_MAKER_1}</td></tr>
     *     <tr><td>false & true</td><td>A property only in {@link Times.NIGHT} & in the game {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>true & false</td><td>A property only in {@link Times.DAY} & in the game {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>false & false</td><td>A property where it is in no times.</td></tr>
     * </table>
     *
     * @param isInDayTheme
     * @param isInNightTheme
     */
    public static get(isInDayTheme: boolean, isInNightTheme: null | boolean,): IsInTimeProperty {
        if (isInDayTheme)
            switch (isInNightTheme) {
                case true:
                    return IsInTimePropertyContainer.__IS_IN_BOTH_TIMES_PROPERTY;
                case false:
                    return IsInTimePropertyContainer.__IS_IN_ONLY_DAY_THEME_PROPERTY;
                case null:
                    return IsInTimePropertyContainer.__IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY;
            }
        if (isInNightTheme === true)
            return IsInTimePropertyContainer.__IS_IN_ONLY_NIGHT_THEME_PROPERTY;
        return IsInTimePropertyContainer.__IS_IN_NO_TIMES_PROPERTY;
    }

    //endregion -------------------- Provider/Multiton method --------------------

}
