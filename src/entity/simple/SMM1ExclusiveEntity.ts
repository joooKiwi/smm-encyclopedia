import {Entity}                        from './Entity';
import {IsInOnlySMM1GameProperty}      from '../properties/IsInOnlySMM1GameProperty';
import {IsInOnlySMM1Property}          from '../properties/IsInOnlySMM1Property';
import {IsInOnlySMM1GameStyleProperty} from '../properties/IsInOnlySMM1GameStyleProperty';

export interface SMM1ExclusiveEntity
    extends Entity, IsInOnlySMM1Property, IsInOnlySMM1GameStyleProperty {

    isInProperty: IsInOnlySMM1Property

    isInGame: IsInOnlySMM1GameProperty
    isInSuperMarioMaker1: true
    isInSuperMarioMaker2: false

    isInGameStyle: IsInOnlySMM1GameStyleProperty
    isInSuperMarioBrosStyle: true
    isInSuperMarioBros3Style: true
    isInSuperMarioWorldStyle: true
    isInNewSuperMarioBrosUStyle: true
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
