import type {ExclusiveSMM2GamePropertyInAnyStyle}      from './ExclusiveSMM2GamePropertyInAnyStyle';
import type {ExclusiveSMM2GameStylePropertyInAnyStyle} from './ExclusiveSMM2GameStylePropertyInAnyStyle';
import type {ExclusiveSMM2Property}                    from './ExclusiveSMM2Property';
import type {ExclusiveSMM2ThemePropertyInAnyStyle}     from './ExclusiveSMM2ThemePropertyInAnyStyle';
import type {ExclusiveSMM2TimePropertyInAnyStyle}      from './ExclusiveSMM2TimePropertyInAnyStyle';

export interface ExclusiveSMM2PropertyInAnyStyle
    extends ExclusiveSMM2Property, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle {

    //region -------------------- Game properties --------------------

    get gameContainer(): ExclusiveSMM2GamePropertyInAnyStyle


    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): ExclusiveSMM2GameStylePropertyInAnyStyle


    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): ExclusiveSMM2ThemePropertyInAnyStyle


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

    get timeContainer(): ExclusiveSMM2TimePropertyInAnyStyle


    get isInDayTheme(): this['timeContainer']['isInDayTheme']

    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------

}
