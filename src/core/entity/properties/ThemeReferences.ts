import type {Entity, PossibleOtherEntities} from '../Entity';
import type {Themes}                        from '../../theme/Themes';

export interface ThemeReferences {

    get referenceInGroundTheme(): PossibleOtherEntities

    get referenceInUndergroundTheme(): PossibleOtherEntities

    get referenceInUnderwaterTheme(): PossibleOtherEntities

    get referenceInDesertTheme(): PossibleOtherEntities

    get referenceInSnowTheme(): PossibleOtherEntities

    get referenceInSkyTheme(): PossibleOtherEntities

    get referenceInForestTheme(): PossibleOtherEntities

    get referenceInGhostHouseTheme(): PossibleOtherEntities

    get referenceInAirshipTheme(): PossibleOtherEntities

    get referenceInCastleTheme(): PossibleOtherEntities


    getReferenceFrom(theme: Themes,): PossibleOtherEntities

    get everyThemeReferences(): readonly Entity[]

}
