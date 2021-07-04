import {Entity} from '../simple/Entity';

export interface EntityReferences {

    //region -------------------- Game style references properties --------------------

    get referenceInSuperMarioBrosStyle(): Entity

    get referenceInSuperMarioBros3Style(): Entity

    get referenceInSuperMarioWorldStyle(): Entity

    get referenceInNewSuperMarioBrosUStyle(): Entity

    get referenceInSuperMario3DWorldStyle(): Entity

    //endregion -------------------- Game style references properties --------------------
    //region -------------------- Theme references properties --------------------

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

    //endregion -------------------- Theme references properties --------------------
    //region -------------------- Time references properties --------------------

    get referenceInDayTheme(): Entity

    get referenceInNightTheme(): Entity

    //endregion -------------------- Time references properties --------------------

    get everyReferences(): readonly Entity[]

}
