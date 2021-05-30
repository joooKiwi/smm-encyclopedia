import {Entity}                        from './Entity';
import {IsInOnlySMM1GameProperty}      from '../properties/IsInOnlySMM1GameProperty';
import {IsInOnlySMM1GameStyleProperty} from '../properties/IsInOnlySMM1GameStyleProperty';
import {IsInOnlySMM1Property}          from '../properties/IsInOnlySMM1Property';
import {IsInOnlySMM1ThemeProperty}     from '../properties/IsInOnlySMM1ThemeProperty';
import {IsInOnlySMM1TimeProperty}      from '../properties/IsInOnlySMM1TimeProperty';

export interface SMM1ExclusiveEntity
    extends Entity, IsInOnlySMM1Property, IsInOnlySMM1GameProperty, IsInOnlySMM1GameStyleProperty, IsInOnlySMM1ThemeProperty, IsInOnlySMM1TimeProperty {

    isInPropertyContainer: IsInOnlySMM1Property

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
