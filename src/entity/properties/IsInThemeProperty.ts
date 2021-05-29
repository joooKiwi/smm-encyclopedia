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

    toCourseThemeMap(): Map<Themes, boolean>

}
