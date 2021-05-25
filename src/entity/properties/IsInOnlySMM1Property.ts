import {IsInProperty}                  from './IsInProperty';
import {IsInOnlySMM1GameProperty}      from './IsInOnlySMM1GameProperty';
import {IsInOnlySMM1GameStyleProperty} from './IsInOnlySMM1GameStyleProperty';
import {IsInOnlySMM1ThemeProperty}     from './IsInOnlySMM1ThemeProperty';

export interface IsInOnlySMM1Property
    extends IsInProperty, IsInOnlySMM1GameProperty, IsInOnlySMM1GameStyleProperty, IsInOnlySMM1ThemeProperty {

    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    isInSuperMarioBrosStyle: true
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
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