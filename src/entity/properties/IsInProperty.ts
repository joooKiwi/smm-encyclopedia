import {IsInGameProperty}      from './IsInGameProperty';
import {IsInGameStyleProperty} from './IsInGameStyleProperty';

export interface IsInProperty
    extends IsInGameProperty, IsInGameStyleProperty {

    isInGame: IsInGameProperty

    isInGameStyle: IsInGameStyleProperty

    isInGroundTheme: boolean
    isInUndergroundTheme: null | boolean
    isInUnderwaterTheme: null | boolean
    isInDesertTheme: null | boolean
    isInSnowTheme: null | boolean
    isInSkyTheme: null | boolean
    isInForestTheme: null | boolean
    isInGhostHouseTheme: null | boolean
    isInAirshipTheme: null | boolean
    isInCastleTheme: null | boolean

    isInDayTheme: boolean
    isInNightTheme: null | boolean

}
