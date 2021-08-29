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


    get isInSuperMarioMaker1(): GAME['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): GAME['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): GAME_STYLE


    get isInSuperMarioBrosStyle(): GAME_STYLE['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): GAME_STYLE['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): GAME_STYLE['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): GAME_STYLE['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): GAME_STYLE['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): THEME


    get isInGroundTheme(): THEME['isInGroundTheme']

    get isInUndergroundTheme(): THEME['isInUndergroundTheme']

    get isInUnderwaterTheme(): THEME['isInUnderwaterTheme']

    get isInDesertTheme(): THEME['isInDesertTheme']

    get isInSnowTheme(): THEME['isInSnowTheme']

    get isInSkyTheme(): THEME['isInSkyTheme']

    get isInForestTheme(): THEME['isInForestTheme']

    get isInGhostHouseTheme(): THEME['isInGhostHouseTheme']

    get isInAirshipTheme(): THEME['isInAirshipTheme']

    get isInCastleTheme(): THEME['isInCastleTheme']

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    get timeContainer(): TIME


    get isInDayTheme(): TIME['isInDayTheme']

    get isInNightTheme(): TIME['isInNightTheme']

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
