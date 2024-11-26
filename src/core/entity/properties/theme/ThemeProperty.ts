import type {Themes} from 'core/theme/Themes'

export interface ThemeProperty {

    readonly isInGroundTheme: boolean
    readonly isInUndergroundTheme: boolean
    readonly isInUnderwaterTheme: boolean
    readonly isInDesertTheme: boolean
    readonly isInSnowTheme: boolean
    readonly isInSkyTheme: boolean
    readonly isInForestTheme: boolean
    readonly isInGhostHouseTheme: boolean
    readonly isInAirshipTheme: boolean
    readonly isInCastleTheme: boolean

    /**
     * Return a {@link Map} based on the enum {@link Themes}
     * with every value stored inside this instance ({@link ThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): ReadonlyMap<Themes, boolean>

}
