import type {ExclusiveSMM2Entity}                   from './ExclusiveSMM2Entity';
import type {ExclusiveSMM2PropertyInSM3DW}          from '../properties/exclusive/ExclusiveSMM2PropertyInSM3DW';
import type {ExclusiveSMM2GamePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2GamePropertyInSM3DW';
import type {ExclusiveSMM2GameStylePropertyInSM3DW} from '../properties/exclusive/ExclusiveSMM2GameStylePropertyInSM3DW';
import type {ExclusiveSMM2ThemePropertyInSM3DW}     from '../properties/exclusive/ExclusiveSMM2ThemePropertyInSM3DW';
import type {ExclusiveSMM2TimePropertyInSM3DW}      from '../properties/exclusive/ExclusiveSMM2TimePropertyInSM3DW';

export interface ExclusiveSM3DWEntity
    extends ExclusiveSMM2Entity, ExclusiveSMM2PropertyInSM3DW, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW {

    get propertyContainer(): ExclusiveSMM2PropertyInSM3DW

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): this['propertyContainer']['gameStyleContainer']

    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): this['propertyContainer']['themeContainer']

    get isInGroundTheme(): this['themeContainer']['isInGroundTheme']

    get isInUndergroundTheme(): this['themeContainer']['isInUndergroundTheme']

    get isInUnderwaterTheme(): this['themeContainer']['isInUnderwaterTheme']

    get isInDesertTheme(): this['themeContainer']['isInDesertTheme']

    get isInSnowTheme(): this['themeContainer']['isInSnowTheme']

    get isInSkyTheme(): this['themeContainer']['isInSkyTheme']

    get isInForestTheme(): this['themeContainer']['isInForestTheme']

    get isInGhostHouseTheme(): this['themeContainer']['isInGhostHouseTheme']

    get isInAirshipTheme(): this['themeContainer']['isInAirshipTheme']

    get isInCastleTheme(): this['themeContainer']['isInCastleTheme']

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    get timeContainer(): this['propertyContainer']['timeContainer']

    get isInDayTheme(): this['timeContainer']['isInDayTheme']

    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------

}