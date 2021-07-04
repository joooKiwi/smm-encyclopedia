import {Themes} from '../theme/Themes';

export interface ThemeProperty {

    get isInGroundTheme(): boolean

    get isInUndergroundTheme(): boolean

    get isInUnderwaterTheme(): boolean

    get isInDesertTheme(): null | boolean

    get isInSnowTheme(): null | boolean

    get isInSkyTheme(): null | boolean

    get isInForestTheme(): null | boolean

    get isInGhostHouseTheme(): boolean

    get isInAirshipTheme(): boolean

    get isInCastleTheme(): boolean

    /**
     * Return a {@link Map} based on the enum {@link Themes}
     * with every values stored inside this instance ({@link ThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): Map<Themes, boolean>

}
