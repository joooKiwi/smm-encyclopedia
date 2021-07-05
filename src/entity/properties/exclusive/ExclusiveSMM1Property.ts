import type {ExclusiveSMM1GameProperty}      from './ExclusiveSMM1GameProperty';
import type {ExclusiveSMM1GameStyleProperty} from './ExclusiveSMM1GameStyleProperty';
import type {ExclusiveSMM1ThemeProperty}     from './ExclusiveSMM1ThemeProperty';
import type {ExclusiveSMM1TimeProperty}      from './ExclusiveSMM1TimeProperty';
import type {Property}                       from '../Property';

export interface ExclusiveSMM1Property
    extends Property, ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty {

    //region -------------------- Game properties --------------------

    get gameContainer(): ExclusiveSMM1GameProperty


    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): ExclusiveSMM1GameStyleProperty


    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): ExclusiveSMM1ThemeProperty


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

    get timeContainer(): ExclusiveSMM1TimeProperty


    get isInDayTheme(): this['timeContainer']['isInDayTheme']

    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------

}