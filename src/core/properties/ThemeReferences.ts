import type {Entity} from '../entity/Entity';
import type {Themes} from '../theme/Themes';

export interface ThemeReferences {

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


    getReferenceFrom(theme: Themes,): Entity

    get everyThemeReferences(): readonly Entity[]

}
