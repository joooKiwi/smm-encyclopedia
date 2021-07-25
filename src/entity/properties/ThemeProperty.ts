import type {Themes} from '../theme/Themes';

export interface ThemeProperty {

    get isInGroundTheme(): boolean

    get isInUndergroundTheme(): boolean

    get isInUnderwaterTheme(): boolean

    get isInDesertTheme(): | boolean | null

    get isInSnowTheme(): | boolean | null

    get isInSkyTheme(): | boolean | null

    get isInForestTheme(): | boolean | null

    get isInGhostHouseTheme(): boolean

    get isInAirshipTheme(): boolean

    get isInCastleTheme(): boolean

    /**
     * Return a {@link Map} based on the enum {@link Themes}
     * with every values stored inside this instance ({@link ThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): ReadonlyMap<Themes, boolean>

}
