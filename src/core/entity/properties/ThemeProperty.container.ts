import type {AbstractExclusiveSMM2ThemeProperty, ExclusiveSMM1ThemeProperty, ThemeProperty} from './ThemeProperty';

import {assert} from '../../util/utilitiesMethods';
import {Themes} from '../../theme/Themes';

/**
 * @multiton
 * @provider
 */
export class ThemePropertyContainer
    implements ThemeProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #IS_IN_NO_THEMES =                              new ThemePropertyContainer(false, false, false, null,  null,  null,  null,  false, false, false,);
    static readonly #IS_IN_SMM1_THEMES =                            new ThemePropertyContainer(true,  true,  true,  null,  null,  null,  null,  true,  true,  true, ) as ExclusiveSMM1ThemeProperty;

    static readonly #IS_IN_EXCLUSIVE_GROUND_THEME =                 new ThemePropertyContainer(true,  false, false, false, false, false, false, false, false, false,) as AbstractExclusiveSMM2ThemeProperty;
    static readonly #IS_IN_NOT_EXCLUSIVE_GROUND_THEME =             new ThemePropertyContainer(false, true,  true,  true,  true,  true,  true,  true,  true,  true, ) as AbstractExclusiveSMM2ThemeProperty;

    static readonly #IS_IN_EXCLUSIVE_UNDERWATER_THEME =             new ThemePropertyContainer(false, false, true,  false, false, false, false, false, false, false, ) as AbstractExclusiveSMM2ThemeProperty;
    static readonly #IS_IN_NOT_EXCLUSIVE_UNDERWATER_THEME =         new ThemePropertyContainer(true,  true,  false, true,  true,  true,  true,  true,  true,  true, ) as AbstractExclusiveSMM2ThemeProperty;

    static readonly #IS_IN_EXCLUSIVE_SNOW_THEME =                   new ThemePropertyContainer(false, false, false, false, true,  false, false, false, false, false,) as AbstractExclusiveSMM2ThemeProperty;
    static readonly #IS_IN_NOT_EXCLUSIVE_SNOW_THEME =               new ThemePropertyContainer(true,  true,  true,  true,  false, true,  true,  true,  true,  true, ) as AbstractExclusiveSMM2ThemeProperty;

    static readonly #IS_IN_EXCLUSIVE_UNDERGROUND_AND_FOREST_THEME = new ThemePropertyContainer(false, true,  false, false, false, false, true,  false, false, false,) as AbstractExclusiveSMM2ThemeProperty;
    static readonly #IS_IN_EXCLUSIVE_UNDERWATER_AND_FOREST_THEME =  new ThemePropertyContainer(false, false, true,  false, false, false, true,  false, false, false,) as AbstractExclusiveSMM2ThemeProperty;

    static readonly #IS_IN_EVERY_THEMES =                           new ThemePropertyContainer(true,  true,  true,  true,  true,  true,  true,  true,  true,  true, ) as AbstractExclusiveSMM2ThemeProperty;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInGroundTheme: boolean;
    readonly #isInUndergroundTheme: boolean;
    readonly #isInUnderwaterTheme: boolean;
    readonly #isInDesertTheme: | boolean | null;
    readonly #isInSnowTheme: | boolean | null;
    readonly #isInSkyTheme: | boolean | null;
    readonly #isInForestTheme: | boolean | null;
    readonly #isInGhostHouseTheme: boolean;
    readonly #isInAirshipTheme: boolean;
    readonly #isInCastleTheme: boolean;

    private constructor(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: | boolean | null, isInSnowTheme: | boolean | null, isInSkyTheme: | boolean | null, isInForestTheme: | boolean | null, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,) {
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

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(isInGroundTheme: true, isInUndergroundTheme: true, isInUnderwaterTheme: true, isInDesertTheme: null, isInSnowTheme: null, isInSkyTheme: null, isInForestTheme: null, isInGhostHouseTheme: true, isInAirshipTheme: true, isInCastleTheme: true,): ExclusiveSMM1ThemeProperty
    public static get(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: | boolean | null, isInSnowTheme: | boolean | null, isInSkyTheme: | boolean | null, isInForestTheme: | boolean | null, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,): ThemeProperty
    public static get(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: | boolean | null, isInSnowTheme: | boolean | null, isInSkyTheme: | boolean | null, isInForestTheme: | boolean | null, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,): ThemeProperty {
        if (isInDesertTheme === null && isInSnowTheme === null && isInSkyTheme === null && isInForestTheme === null) {
            if (isInGroundTheme &&  isInUndergroundTheme &&  isInUnderwaterTheme &&  isInGhostHouseTheme &&  isInAirshipTheme &&  isInCastleTheme )
                return this.#IS_IN_SMM1_THEMES;
            if (!isInGroundTheme && !isInUndergroundTheme && !isInUnderwaterTheme && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
                return this.#IS_IN_NO_THEMES;
        }
        if (isInGroundTheme  && isInUndergroundTheme  && isInUnderwaterTheme  && isInDesertTheme === true && isInSnowTheme === true && isInSkyTheme === true && isInForestTheme === true && isInGhostHouseTheme  && isInAirshipTheme  && isInCastleTheme )
            return this.#IS_IN_EVERY_THEMES;

        //region ----- Exclusive (or not) on underwater theme -----

        if (!isInGroundTheme && !isInUndergroundTheme && isInUnderwaterTheme  && isInDesertTheme !== true && isInSnowTheme !== true && isInSkyTheme !== true && isInForestTheme !== true && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
            return this.#IS_IN_EXCLUSIVE_UNDERWATER_THEME;
        if (isInGroundTheme  && isInUndergroundTheme  && !isInUnderwaterTheme && isInDesertTheme === true && isInSnowTheme === true && isInSkyTheme === true && isInForestTheme === true && isInGhostHouseTheme  && isInAirshipTheme  && isInCastleTheme )
            return this.#IS_IN_NOT_EXCLUSIVE_UNDERWATER_THEME;

        //endregion ----- Exclusive (or not) on underwater theme -----
        //region ----- Exclusive (or not) on snow theme -----

        if (!isInGroundTheme && !isInUndergroundTheme && !isInUnderwaterTheme && isInDesertTheme !== true && isInSnowTheme === true && isInSkyTheme !== true && isInForestTheme !== true && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
            return this.#IS_IN_EXCLUSIVE_SNOW_THEME;
        if (isInGroundTheme  && isInUndergroundTheme  && isInUnderwaterTheme  && isInDesertTheme === true && isInSnowTheme !== true && isInSkyTheme === true && isInForestTheme === true && isInGhostHouseTheme  &&  isInAirshipTheme && isInCastleTheme )
            return this.#IS_IN_NOT_EXCLUSIVE_SNOW_THEME;

        //endregion ----- Exclusive (or not) on snow theme -----
        //region ----- Exclusive (or not) on underground theme -----

        if (isInGroundTheme  && !isInUndergroundTheme && !isInUnderwaterTheme && isInDesertTheme !== true && isInSnowTheme !== true && isInSkyTheme !== true && isInForestTheme !== true && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
            return this.#IS_IN_EXCLUSIVE_GROUND_THEME;
        if (!isInGroundTheme && isInUndergroundTheme  && isInUnderwaterTheme  && isInDesertTheme === true && isInSnowTheme === true && isInSkyTheme === true && isInForestTheme === true && isInGhostHouseTheme  && isInAirshipTheme  && isInCastleTheme )
            return this.#IS_IN_NOT_EXCLUSIVE_GROUND_THEME;

        //endregion ----- Exclusive (or not) on underground theme -----
        //region ----- Exclusive 2 themes -----

        if (!isInGroundTheme && isInUndergroundTheme  && !isInUnderwaterTheme && isInDesertTheme !== true && isInSnowTheme !== true && isInSkyTheme !== true && isInForestTheme === true && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
            return this.#IS_IN_EXCLUSIVE_UNDERGROUND_AND_FOREST_THEME;
        if (!isInGroundTheme && !isInUndergroundTheme && isInUnderwaterTheme  && isInDesertTheme !== true && isInSnowTheme !== true && isInSkyTheme !== true && isInForestTheme === true && !isInGhostHouseTheme && !isInAirshipTheme && !isInCastleTheme)
            return this.#IS_IN_EXCLUSIVE_UNDERWATER_AND_FOREST_THEME;

        //endregion ----- Exclusive 2 themes -----

        assert(false, `No theme can be used with this theme selection (${isInGroundTheme}, ${isInUndergroundTheme}, ${isInUnderwaterTheme}, ${isInDesertTheme}, ${isInSnowTheme}, ${isInSkyTheme}, ${isInForestTheme}, ${isInGhostHouseTheme}, ${isInAirshipTheme}, ${isInCastleTheme}).`,);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}
