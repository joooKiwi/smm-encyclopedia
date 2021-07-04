import {ThemeProperty} from '../ThemeProperty';

export interface ExclusiveSMM2ThemeProperty
    extends ThemeProperty {

    get isInGroundTheme(): boolean

    get isInUndergroundTheme(): boolean

    get isInUnderwaterTheme(): boolean

    get isInDesertTheme(): boolean

    get isInSnowTheme(): boolean

    get isInSkyTheme(): boolean

    get isInForestTheme(): boolean

    get isInGhostHouseTheme(): boolean

    get isInAirshipTheme(): boolean

    get isInCastleTheme(): boolean

}
