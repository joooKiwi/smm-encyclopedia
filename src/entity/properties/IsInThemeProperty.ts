import {Themes} from '../theme/Themes';

export interface IsInThemeProperty {

    isInGroundTheme: boolean
    isInUndergroundTheme: boolean
    isInUnderwaterTheme: boolean
    isInDesertTheme: null | boolean
    isInSnowTheme: null | boolean
    isInSkyTheme: null | boolean
    isInForestTheme: null | boolean
    isInGhostHouseTheme: boolean
    isInAirshipTheme: boolean
    isInCastleTheme: boolean

    /**
     * Return a {@link Map} based on the enum {@link Themes}
     * with every values stored inside this instance ({@link IsInThemeProperty})
     * as a boolean only.
     */
    toCourseThemeMap(): Map<Themes, boolean>

}
