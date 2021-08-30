import type {ExclusiveSMM1GameProperty, ExclusiveSMM2GameProperty, ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GamePropertyInSM3DW, GameProperty}                          from './GameProperty';
import type {ExclusiveSMM1GameStyleProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInSM3DW, GameStyleProperty} from './GameStyleProperty';
import type {ExclusiveSMM1ThemeProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInSM3DW, ThemeProperty}                     from './ThemeProperty';
import type {ExclusiveSMM1TimeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2TimePropertyInAnyStyle, ExclusiveSMM2TimePropertyInSM3DW, TimeProperty}                          from './TimeProperty';
import type {ExclusiveSMM1LimitProperty, ExclusiveSMM2LimitProperty, ExclusiveSMM2LimitPropertyInAnyStyle, LimitProperty}                                                        from './limit/LimitProperty';
import {ExclusiveSMM2LimitPropertyInSM3DW}                                                                                                                                       from './limit/LimitProperty';

export interface Property<GAME extends GameProperty = GameProperty, GAME_STYLE extends GameStyleProperty = GameStyleProperty, THEME extends ThemeProperty = ThemeProperty, TIME extends TimeProperty = TimeProperty, LIMIT extends LimitProperty = LimitProperty, >
    extends GameProperty<GAME['isInSuperMarioMaker1'], GAME['isInSuperMarioMaker2']>,
        GameStyleProperty<GAME_STYLE['isInSuperMarioBrosStyle'], GAME_STYLE['isInSuperMarioBros3Style'], GAME_STYLE['isInSuperMarioWorldStyle'], GAME_STYLE['isInNewSuperMarioBrosUStyle'], GAME_STYLE['isInSuperMario3DWorldStyle']>,
        ThemeProperty<THEME['isInGroundTheme'], THEME['isInUndergroundTheme'], THEME['isInUnderwaterTheme'], THEME['isInDesertTheme'], THEME['isInSnowTheme'], THEME['isInSkyTheme'], THEME['isInForestTheme'], THEME['isInGhostHouseTheme'], THEME['isInAirshipTheme'], THEME['isInCastleTheme']>,
        TimeProperty<TIME['isInDayTheme'], TIME['isInNightTheme']>,
        LimitProperty<LIMIT['editorLimit'], LIMIT['isInGeneralLimitWhilePlaying'], LIMIT['isInGlobalGeneralLimitWhilePlaying'], LIMIT['isInPowerUpLimitWhilePlaying'], LIMIT['isInProjectileLimitWhilePlaying'], LIMIT['customLimitWhilePlaying']> {

    get gameContainer(): GAME

    get gameStyleContainer(): GAME_STYLE

    get themeContainer(): THEME

    get timeContainer(): TIME

    get limitContainer(): LIMIT

}

export type ExclusiveSMM1Property
    = Property<ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty, ExclusiveSMM1LimitProperty>
      & ExclusiveSMM1GameProperty & ExclusiveSMM1GameStyleProperty & ExclusiveSMM1ThemeProperty & ExclusiveSMM1TimeProperty & ExclusiveSMM1LimitProperty;
export type ExclusiveSMM2Property<GAME extends ExclusiveSMM2GameProperty = ExclusiveSMM2GameProperty, GAME_STYLE extends ExclusiveSMM2GameStyleProperty = ExclusiveSMM2GameStyleProperty, THEME extends ExclusiveSMM2ThemeProperty = ExclusiveSMM2ThemeProperty, TIME extends ExclusiveSMM2TimeProperty = ExclusiveSMM2TimeProperty, LIMIT extends ExclusiveSMM2LimitProperty = ExclusiveSMM2LimitProperty, >
    = Property<GAME, GAME_STYLE, THEME, TIME, LIMIT>
      & ExclusiveSMM2GameProperty & ExclusiveSMM2GameStyleProperty & ExclusiveSMM2ThemeProperty & ExclusiveSMM2TimeProperty & ExclusiveSMM2LimitProperty;
export type ExclusiveSMM2PropertyInSM3DW
    = ExclusiveSMM2Property<ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW, ExclusiveSMM2LimitPropertyInSM3DW>
      & ExclusiveSMM2GamePropertyInSM3DW & ExclusiveSMM2GameStylePropertyInSM3DW & ExclusiveSMM2ThemePropertyInSM3DW & ExclusiveSMM2TimePropertyInSM3DW & ExclusiveSMM2LimitPropertyInSM3DW;
export type ExclusiveSMM2PropertyInAnyStyle
    = ExclusiveSMM2Property<ExclusiveSMM2GamePropertyInAnyStyle, ExclusiveSMM2GameStylePropertyInAnyStyle, ExclusiveSMM2ThemePropertyInAnyStyle, ExclusiveSMM2TimePropertyInAnyStyle, ExclusiveSMM2LimitPropertyInAnyStyle>
      & ExclusiveSMM2GamePropertyInAnyStyle & ExclusiveSMM2GameStylePropertyInAnyStyle & ExclusiveSMM2ThemePropertyInAnyStyle & ExclusiveSMM2TimePropertyInAnyStyle & ExclusiveSMM2LimitPropertyInAnyStyle;
