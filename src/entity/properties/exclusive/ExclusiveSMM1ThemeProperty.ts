import type {ThemeProperty} from '../ThemeProperty';

export interface ExclusiveSMM1ThemeProperty
    extends ThemeProperty {

    get isInGroundTheme(): true

    get isInUndergroundTheme(): true

    get isInUnderwaterTheme(): true

    get isInDesertTheme(): null

    get isInSnowTheme(): null

    get isInSkyTheme(): null

    get isInForestTheme(): null

    get isInGhostHouseTheme(): true

    get isInAirshipTheme(): true

    get isInCastleTheme(): true

}
