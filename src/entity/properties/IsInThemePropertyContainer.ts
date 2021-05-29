import {IsInThemeProperty}         from './IsInThemeProperty';
import {IsInOnlySMM1ThemeProperty} from './IsInOnlySMM1ThemeProperty';
import {IsInOnlySMM2ThemeProperty} from './IsInOnlySMM2ThemeProperty';
import {Themes}                    from '../theme/Themes';

/**
 * @multiton
 * @provider
 */
export class IsInThemePropertyContainer
    implements IsInThemeProperty {

    private static readonly __IS_IN_NO_THEMES =                              new IsInThemePropertyContainer(false, false, false, null,  null,  null,  null,  false, false, false,);
    private static readonly __IS_IN_MARIO_MAKER_1_THEMES =                   new IsInThemePropertyContainer(true,  true,  true,  null,  null,  null,  null,  true,  true,  true, ) as IsInOnlySMM1ThemeProperty;
    private static readonly __IS_IN_EXCLUSIVE_GROUND_THEME =                 new IsInThemePropertyContainer(true,  false, false, false, false, false, false, false, false, false,) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_NOT_EXCLUSIVE_GROUND_THEME =             new IsInThemePropertyContainer(false, true,  true,  true,  true,  true,  true,  true,  true,  true, ) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_EXCLUSIVE_UNDERWATER_THEME =             new IsInThemePropertyContainer(false, false, true,  false, false, false, false, true,  true,  true, ) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_NOT_EXCLUSIVE_UNDERWATER_THEME =         new IsInThemePropertyContainer(true,  true,  false, true,  true,  true,  true,  true,  true,  true, ) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_EXCLUSIVE_UNDERGROUND_AND_FOREST_THEME = new IsInThemePropertyContainer(false, true,  false, false, false, false, true,  true,  true,  true, ) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_EXCLUSIVE_SNOW_THEME =                   new IsInThemePropertyContainer(false, false, false, false, true,  false, false, false, false, false,) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_NOT_EXCLUSIVE_SNOW_THEME =               new IsInThemePropertyContainer(true,  true,  true,  true,  false, true,  true,  true,  true,  true, ) as IsInOnlySMM2ThemeProperty;
    private static readonly __IS_IN_EVERY_THEMES =                           new IsInThemePropertyContainer(true,  true,  true,  true,  true,  true,  true,  true,  true,  true, ) as IsInOnlySMM2ThemeProperty;

    readonly #isInGroundTheme: boolean;
    readonly #isInUndergroundTheme: boolean;
    readonly #isInUnderwaterTheme: boolean;
    readonly #isInDesertTheme: null | boolean;
    readonly #isInSnowTheme: null | boolean;
    readonly #isInSkyTheme: null | boolean;
    readonly #isInForestTheme: null | boolean;
    readonly #isInGhostHouseTheme: boolean;
    readonly #isInAirshipTheme: boolean;
    readonly #isInCastleTheme: boolean;

    private constructor(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,) {
        this.#isInGroundTheme = isInGroundTheme;
        this.#isInUndergroundTheme = isInUndergroundTheme;
        this.#isInUnderwaterTheme = isInUnderwaterTheme;
        this.#isInDesertTheme = isInDesertTheme;
        this.#isInSnowTheme = isInSnowTheme;
        this.#isInSkyTheme = isInSkyTheme;
        this.#isInForestTheme = isInForestTheme;
        this.#isInGhostHouseTheme = isInGhostHouseTheme;
        this.#isInAirshipTheme = isInAirshipTheme;
        this.#isInCastleTheme = isInCastleTheme;
    }

    public get isInGroundTheme() {
        return this.#isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.#isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.#isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.#isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.#isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.#isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.#isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.#isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.#isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.#isInCastleTheme;
    }


    public toCourseThemeMap(): Map<Themes, boolean> {
        return new Map(Themes.courseThemes.map(theme => [theme, theme.get(this),]));
    }

    public static get(isInGroundTheme: true, isInUndergroundTheme: true, isInUnderwaterTheme: true, isInDesertTheme: null, isInSnowTheme: null, isInSkyTheme: null, isInForestTheme: null, isInGhostHouseTheme: true, isInAirshipTheme: true, isInCastleTheme: true,): IsInOnlySMM1ThemeProperty
    public static get(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,): IsInThemeProperty
    public static get(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: null | boolean, isInSnowTheme: null | boolean, isInSkyTheme: null | boolean, isInForestTheme: null | boolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,): IsInThemeProperty {
        if (isInDesertTheme === null && isInSnowTheme === null && isInSkyTheme === null && isInForestTheme === null) {
            if (isInGroundTheme && isInUndergroundTheme && isInUnderwaterTheme
                && isInGhostHouseTheme && isInAirshipTheme && isInCastleTheme)
                return this.__IS_IN_MARIO_MAKER_1_THEMES;
            return this.__IS_IN_NO_THEMES;
        }
        if (isInGroundTheme) {
            if (!isInUnderwaterTheme)
                return this.__IS_IN_NOT_EXCLUSIVE_UNDERWATER_THEME;
            if (isInSnowTheme === false)
                return this.__IS_IN_NOT_EXCLUSIVE_SNOW_THEME;
            return this.__IS_IN_EXCLUSIVE_GROUND_THEME;
        }

        if (isInUndergroundTheme) {
            if (!isInUnderwaterTheme)
                return this.__IS_IN_EXCLUSIVE_UNDERGROUND_AND_FOREST_THEME;
            return this.__IS_IN_NOT_EXCLUSIVE_GROUND_THEME;
        }
        if (isInUnderwaterTheme)
            return this.__IS_IN_EXCLUSIVE_UNDERWATER_THEME;
        if (isInSnowTheme === true)
            return this.__IS_IN_EXCLUSIVE_SNOW_THEME;

        return this.__IS_IN_EVERY_THEMES;
    }

}
