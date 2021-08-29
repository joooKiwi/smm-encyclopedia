import type {ExclusiveSMM1GameProperty, ExclusiveSMM2GameProperty, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GamePropertyInSM3DW, GameProperty}                          from './GameProperty';
import type {ExclusiveSMM1GameStyleProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInSM3DW, GameStyleProperty} from './GameStyleProperty';
import type {ExclusiveSMM1ThemeProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInSM3DW, ThemeProperty}                     from './ThemeProperty';
import type {ExclusiveSMM1TimeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2TimePropertyInAnyStyle, ExclusiveSMM2TimePropertyInSM3DW, TimeProperty}                          from './TimeProperty';

export interface Property<GAME extends GameProperty = GameProperty, GAME_STYLE extends GameStyleProperty = GameStyleProperty, THEME extends ThemeProperty = ThemeProperty, TIME extends TimeProperty = TimeProperty, >
    extends GameProperty<GAME['isInSuperMarioMaker1'], GAME['isInSuperMarioMaker2']>,
        GameStyleProperty<GAME_STYLE['isInSuperMarioBrosStyle'], GAME_STYLE['isInSuperMarioBros3Style'], GAME_STYLE['isInSuperMarioWorldStyle'], GAME_STYLE['isInNewSuperMarioBrosUStyle'], GAME_STYLE['isInSuperMario3DWorldStyle']>,
        ThemeProperty<THEME['isInGroundTheme'], THEME['isInUndergroundTheme'], THEME['isInUnderwaterTheme'], THEME['isInDesertTheme'], THEME['isInSnowTheme'], THEME['isInSkyTheme'], THEME['isInForestTheme'], THEME['isInGhostHouseTheme'], THEME['isInAirshipTheme'], THEME['isInCastleTheme']>,
        TimeProperty<TIME['isInDayTheme'], TIME['isInNightTheme']> {

    //region -------------------- Game properties --------------------

    get gameContainer(): GAME

    // @ts-ignore
    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']
    //@ts-ignore
    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): GAME_STYLE

    // @ts-ignore
    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']
    // @ts-ignore
    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']
    // @ts-ignore
    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']
    // @ts-ignore
    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']
    // @ts-ignore
    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): THEME


    get isInGroundTheme(): this['themeContainer']['isInGroundTheme']
    // @ts-ignore
    get isInUndergroundTheme(): this['themeContainer']['isInUndergroundTheme']
    // @ts-ignore
    get isInUnderwaterTheme(): this['themeContainer']['isInUnderwaterTheme']
    // @ts-ignore
    get isInDesertTheme(): this['themeContainer']['isInDesertTheme']
    // @ts-ignore
    get isInSnowTheme(): this['themeContainer']['isInSnowTheme']
    // @ts-ignore
    get isInSkyTheme(): this['themeContainer']['isInSkyTheme']
    // @ts-ignore
    get isInForestTheme(): this['themeContainer']['isInForestTheme']
    // @ts-ignore
    get isInGhostHouseTheme(): this['themeContainer']['isInGhostHouseTheme']
    // @ts-ignore
    get isInAirshipTheme(): this['themeContainer']['isInAirshipTheme']
    // @ts-ignore
    get isInCastleTheme(): this['themeContainer']['isInCastleTheme']

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    get timeContainer(): TIME

    // @ts-ignore
    get isInDayTheme(): this['timeContainer']['isInDayTheme']
    // @ts-ignore
    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------

}

export type ExclusiveSMM1Property
    = Property<ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty>
      & ExclusiveSMM1GameProperty & ExclusiveSMM1GameStyleProperty & ExclusiveSMM1ThemeProperty & ExclusiveSMM1TimeProperty;
export type ExclusiveSMM2Property<GAME extends ExclusiveSMM2GameProperty = ExclusiveSMM2GameProperty, GAME_STYLE extends ExclusiveSMM2GameStyleProperty = ExclusiveSMM2GameStyleProperty, THEME extends ExclusiveSMM2ThemeProperty = ExclusiveSMM2ThemeProperty, TIME extends ExclusiveSMM2TimeProperty = ExclusiveSMM2TimeProperty, >
    = Property<GAME, GAME_STYLE, THEME, TIME>
      & ExclusiveSMM2GameProperty & ExclusiveSMM2GameStyleProperty & ExclusiveSMM2ThemeProperty & ExclusiveSMM2TimeProperty;
export type ExclusiveSMM2PropertyInSM3DW
    = ExclusiveSMM2Property<ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW>
      & ExclusiveSMM2GamePropertyInSM3DW & ExclusiveSMM2GameStylePropertyInSM3DW & ExclusiveSMM2ThemePropertyInSM3DW & ExclusiveSMM2TimePropertyInSM3DW;
export type ExclusiveSMM2PropertyInAnyStyle
    = ExclusiveSMM2Property<ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle>
      & ExclusiveSMM2GamePropertyInAnyStyle & ExclusiveSMM2GameStylePropertyInAnyStyle & ExclusiveSMM2ThemePropertyInAnyStyle & ExclusiveSMM2TimePropertyInAnyStyle;
