import type {ExclusiveSMM2GamePropertyInSM3DW}      from './ExclusiveSMM2GamePropertyInSM3DW';
import type {ExclusiveSMM2GameStylePropertyInSM3DW} from './ExclusiveSMM2GameStylePropertyInSM3DW';
import type {ExclusiveSMM2Property}                 from './ExclusiveSMM2Property';
import type {ExclusiveSMM2TimePropertyInSM3DW}      from './ExclusiveSMM2TimePropertyInSM3DW';
import type {ExclusiveSMM2ThemePropertyInSM3DW}     from './ExclusiveSMM2ThemePropertyInSM3DW';

export interface ExclusiveSMM2PropertyInSM3DW
    extends ExclusiveSMM2Property, ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW {

    //region -------------------- Game properties --------------------

    get gameContainer(): ExclusiveSMM2GamePropertyInSM3DW


    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): ExclusiveSMM2GameStylePropertyInSM3DW


    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): ExclusiveSMM2ThemePropertyInSM3DW


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

    get timeContainer(): ExclusiveSMM2TimePropertyInSM3DW


    get isInDayTheme(): this['timeContainer']['isInDayTheme']

    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------

}
