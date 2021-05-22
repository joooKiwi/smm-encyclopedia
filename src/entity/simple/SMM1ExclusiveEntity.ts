import {Entity}                   from './Entity';
import {IsInOnlySMM1GameProperty} from '../properties/IsInOnlySMM1GameProperty';
import {IsInOnlySMM1Property}     from '../properties/IsInOnlySMM1Property';

export interface SMM1ExclusiveEntity
    extends Entity, IsInOnlySMM1Property {

    isInProperty: IsInOnlySMM1Property

    isInGame: IsInOnlySMM1GameProperty

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
