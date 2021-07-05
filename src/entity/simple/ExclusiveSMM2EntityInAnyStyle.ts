import type {ExclusiveSMM2Entity}                      from './ExclusiveSMM2Entity';
import type {ExclusiveSMM2GamePropertyInAnyStyle}      from '../properties/exclusive/ExclusiveSMM2GamePropertyInAnyStyle';
import type {ExclusiveSMM2GameStylePropertyInAnyStyle} from '../properties/exclusive/ExclusiveSMM2GameStylePropertyInAnyStyle';
import type {ExclusiveSMM2PropertyInAnyStyle}          from '../properties/exclusive/ExclusiveSMM2PropertyInAnyStyle';
import type {ExclusiveSMM2ThemePropertyInAnyStyle}     from '../properties/exclusive/ExclusiveSMM2ThemePropertyInAnyStyle';
import type {ExclusiveSMM2TimePropertyInAnyStyle}      from '../properties/exclusive/ExclusiveSMM2TimePropertyInAnyStyle';

export interface ExclusiveSMM2EntityInAnyStyle
    extends ExclusiveSMM2Entity, ExclusiveSMM2PropertyInAnyStyle, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle {

    get propertyContainer(): ExclusiveSMM2PropertyInAnyStyle

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
