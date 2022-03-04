import type {AbstractExclusiveSMM2GameProperty, ExclusiveSMM1GameProperty, ExclusiveSMM2GameProperty, ExclusiveSMM2GamePropertyInSM3DW, GameProperty}                          from './GameProperty';
import type {AbstractExclusiveSMM2GameStyleProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2GameStylePropertyInSM3DW, GameStyleProperty} from './GameStyleProperty';
import type {AbstractExclusiveSMM2ThemeProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2ThemePropertyInSM3DW, ThemeProperty}                     from './ThemeProperty';
import type {AbstractExclusiveSMM2TimeProperty, ExclusiveSMM1TimeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2TimePropertyInSM3DW, TimeProperty}                          from './TimeProperty';
import type {AbstractExclusiveSMM2LimitProperty, ExclusiveSMM1LimitProperty, ExclusiveSMM2LimitProperty, ExclusiveSMM2LimitPropertyInSM3DW, LimitProperty}                     from './limit/LimitProperty';

export interface Property<GAME extends GameProperty = GameProperty, GAME_STYLE extends GameStyleProperty = GameStyleProperty, THEME extends ThemeProperty = ThemeProperty, TIME extends TimeProperty = TimeProperty, LIMIT extends PossibleLimitProperty = PossibleLimitProperty, >
    extends GameProperty<GAME['isInSuperMarioMaker1'], GAME['isInSuperMarioMakerFor3DS'], GAME['isInSuperMarioMaker2']>,
        GameStyleProperty<GAME_STYLE['isInSuperMarioBrosStyle'], GAME_STYLE['isInSuperMarioBros3Style'], GAME_STYLE['isInSuperMarioWorldStyle'], GAME_STYLE['isInNewSuperMarioBrosUStyle'], GAME_STYLE['isInSuperMario3DWorldStyle']>,
        ThemeProperty<THEME['isInGroundTheme'], THEME['isInUndergroundTheme'], THEME['isInUnderwaterTheme'], THEME['isInDesertTheme'], THEME['isInSnowTheme'], THEME['isInSkyTheme'], THEME['isInForestTheme'], THEME['isInGhostHouseTheme'], THEME['isInAirshipTheme'], THEME['isInCastleTheme']>,
        TimeProperty<TIME['isInDayTheme'], TIME['isInNightTheme']>,
        LimitProperty {

    get gameContainer(): GAME

    get gameStyleContainer(): GAME_STYLE

    get themeContainer(): THEME

    get timeContainer(): TIME

    get limitContainer(): LIMIT

}

export type PossibleLimitProperty = | ExclusiveSMM1LimitProperty | AbstractExclusiveSMM2LimitProperty | PossibleSMM2LimitProperty;
export type PossibleSMM2LimitProperty = | ExclusiveSMM2LimitPropertyInSM3DW | ExclusiveSMM2LimitProperty;

export type ExclusiveSMM1Property
    = Property<ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty, ExclusiveSMM1LimitProperty>
      & ExclusiveSMM1GameProperty & ExclusiveSMM1GameStyleProperty & ExclusiveSMM1ThemeProperty & ExclusiveSMM1TimeProperty & ExclusiveSMM1LimitProperty;
export type AbstractExclusiveSMM2Property<GAME extends AbstractExclusiveSMM2GameProperty = AbstractExclusiveSMM2GameProperty, GAME_STYLE extends AbstractExclusiveSMM2GameStyleProperty = AbstractExclusiveSMM2GameStyleProperty, THEME extends AbstractExclusiveSMM2ThemeProperty = AbstractExclusiveSMM2ThemeProperty, TIME extends AbstractExclusiveSMM2TimeProperty = AbstractExclusiveSMM2TimeProperty, LIMIT extends PossibleSMM2LimitProperty = PossibleSMM2LimitProperty, >
    = Property<GAME, GAME_STYLE, THEME, TIME, LIMIT>
      & AbstractExclusiveSMM2GameProperty & AbstractExclusiveSMM2GameStyleProperty & AbstractExclusiveSMM2ThemeProperty & AbstractExclusiveSMM2TimeProperty & AbstractExclusiveSMM2LimitProperty;
export type ExclusiveSMM2PropertyInSM3DW
    = AbstractExclusiveSMM2Property<ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW, ExclusiveSMM2LimitPropertyInSM3DW>
      & ExclusiveSMM2GamePropertyInSM3DW & ExclusiveSMM2GameStylePropertyInSM3DW & ExclusiveSMM2ThemePropertyInSM3DW & ExclusiveSMM2TimePropertyInSM3DW & ExclusiveSMM2LimitPropertyInSM3DW;
export type ExclusiveSMM2Property
    = AbstractExclusiveSMM2Property<ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2LimitProperty>
      & ExclusiveSMM2GameProperty & ExclusiveSMM2GameStyleProperty & ExclusiveSMM2ThemeProperty & ExclusiveSMM2TimeProperty & ExclusiveSMM2LimitProperty;
