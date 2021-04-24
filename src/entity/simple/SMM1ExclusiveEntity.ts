import {Entity} from "./Entity";
import {IsInExclusiveSMM1Property} from "../properties/IsInExclusiveSMM1Property";

export interface SMM1ExclusiveEntity
    extends Entity, IsInExclusiveSMM1Property {

    isInProperty: IsInExclusiveSMM1Property

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
