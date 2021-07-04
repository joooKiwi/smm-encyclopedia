import {Entity} from '../simple/Entity';

export interface EntityReferences {

    get referenceInSuperMarioBrosStyle(): Entity

    get referenceInSuperMarioBros3Style(): Entity

    get referenceInSuperMarioWorldStyle(): Entity

    get referenceInNewSuperMarioBrosUStyle(): Entity

    get referenceInSuperMario3DWorldStyle(): Entity


    get referenceInGroundTheme(): Entity

    get referenceInUndergroundTheme(): Entity

    get referenceInUnderwaterTheme(): Entity

    get referenceInDesertTheme(): Entity

    get referenceInSnowTheme(): Entity

    get referenceInSkyTheme(): Entity

    get referenceInForestTheme(): Entity

    get referenceInGhostHouseTheme(): Entity

    get referenceInAirshipTheme(): Entity

    get referenceInCastleTheme(): Entity


    get referenceInDayTheme(): Entity

    get referenceInNightTheme(): Entity


    get everyReferences(): readonly Entity[]

}
