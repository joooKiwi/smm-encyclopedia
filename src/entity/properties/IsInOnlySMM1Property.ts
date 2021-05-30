import {IsInProperty}                  from './IsInProperty';
import {IsInOnlySMM1GameProperty}      from './IsInOnlySMM1GameProperty';
import {IsInOnlySMM1GameStyleProperty} from './IsInOnlySMM1GameStyleProperty';
import {IsInOnlySMM1ThemeProperty}     from './IsInOnlySMM1ThemeProperty';
import {IsInOnlySMM1TimeProperty}      from './IsInOnlySMM1TimeProperty';

export interface IsInOnlySMM1Property
    extends IsInProperty, IsInOnlySMM1GameProperty, IsInOnlySMM1GameStyleProperty, IsInOnlySMM1ThemeProperty, IsInOnlySMM1TimeProperty {

    isInGameContainer: IsInOnlySMM1GameProperty
    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    isInGameStyleContainer: IsInOnlySMM1GameStyleProperty
    isInSuperMarioBrosStyle: true
    isInSuperMarioBros3Style: false
    isInSuperMarioWorldStyle: false
    isInNewSuperMarioBrosUStyle: false
    isInSuperMario3DWorldStyle: null

    isInThemeContainer: IsInOnlySMM1ThemeProperty
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

    isInTimeContainer: IsInOnlySMM1TimeProperty
    isInDayTheme: true
    isInNightTheme: null

}