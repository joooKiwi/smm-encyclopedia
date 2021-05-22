import {IsInProperty}             from './IsInProperty';
import {IsInOnlySMM1GameProperty} from './IsInOnlySMM1GameProperty';

export interface IsInOnlySMM1Property
    extends IsInProperty, IsInOnlySMM1GameProperty {

    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    isInSuperMario3DWorldStyle: null

    isInGroundTheme: true
    isInUndergroundTheme: true
    isInUnderwaterTheme: true
    isInDesertTheme: null
    isInSnowTheme: null
    isInSkyTheme: null
    isInForestTheme: null
    isInGhostHouseTheme: true
    isInAirshipTheme: true
    isInCastleTheme: true

    isInDayTheme: true
    isInNightTheme: null

}