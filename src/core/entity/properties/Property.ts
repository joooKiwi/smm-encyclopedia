import type {AbstractExclusiveSMM2GameProperty, ExclusiveSMM1GameProperty, ExclusiveSMM2GameProperty, ExclusiveSMM2GamePropertyInSM3DW, GameProperty}                          from 'core/entity/properties/game/GameProperty'
import type {AbstractExclusiveSMM2GameStyleProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2GameStylePropertyInSM3DW, GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {AbstractExclusiveSMM2ThemeProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2ThemePropertyInSM3DW, ThemeProperty}                     from 'core/entity/properties/theme/ThemeProperty'
import type {AbstractExclusiveSMM2TimeProperty, ExclusiveSMM1TimeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2TimePropertyInSM3DW, TimeProperty}                          from 'core/entity/properties/time/TimeProperty'
import type {AbstractExclusiveSMM2LimitProperty, ExclusiveSMM1LimitProperty, ExclusiveSMM2LimitProperty, ExclusiveSMM2LimitPropertyInSM3DW, LimitProperty}                     from 'core/entity/properties/limit/LimitProperty'
import type {InstrumentProperty}                                                                                                                                               from 'core/entity/properties/instrument/InstrumentProperty'

export interface Property<GAME extends GameProperty = GameProperty, GAME_STYLE extends GameStyleProperty = GameStyleProperty, THEME extends ThemeProperty = ThemeProperty, TIME extends TimeProperty = TimeProperty, LIMIT extends LimitProperty = LimitProperty, INSTRUMENT extends InstrumentProperty = InstrumentProperty, >
    extends GameProperty<GAME['isInSuperMarioMaker1'], GAME['isInSuperMarioMakerFor3DS'], GAME['isInSuperMarioMaker2']>,
        GameStyleProperty<GAME_STYLE['isInSuperMarioBrosStyle'], GAME_STYLE['isInSuperMarioBros3Style'], GAME_STYLE['isInSuperMarioWorldStyle'], GAME_STYLE['isInNewSuperMarioBrosUStyle'], GAME_STYLE['isInSuperMario3DWorldStyle']>,
        ThemeProperty<THEME['isInGroundTheme'], THEME['isInUndergroundTheme'], THEME['isInUnderwaterTheme'], THEME['isInDesertTheme'], THEME['isInSnowTheme'], THEME['isInSkyTheme'], THEME['isInForestTheme'], THEME['isInGhostHouseTheme'], THEME['isInAirshipTheme'], THEME['isInCastleTheme']>,
        TimeProperty<TIME['isInDayTheme'], TIME['isInNightTheme']>,
        LimitProperty,
        InstrumentProperty {

    get gameContainer(): GAME

    get gameStyleContainer(): GAME_STYLE

    get themeContainer(): THEME

    get timeContainer(): TIME

    get limitContainer(): LIMIT

    get instrumentContainer(): INSTRUMENT

}

/**@deprecated*/type PossibleSMM2LimitProperty = | ExclusiveSMM2LimitPropertyInSM3DW | ExclusiveSMM2LimitProperty

/**@deprecated*/export type ExclusiveSMM1Property
    = Property<ExclusiveSMM1GameProperty, ExclusiveSMM1GameStyleProperty, ExclusiveSMM1ThemeProperty, ExclusiveSMM1TimeProperty, ExclusiveSMM1LimitProperty>
      & ExclusiveSMM1GameProperty & ExclusiveSMM1GameStyleProperty & ExclusiveSMM1ThemeProperty & ExclusiveSMM1TimeProperty & ExclusiveSMM1LimitProperty
/**@deprecated*/export type AbstractExclusiveSMM2Property<GAME extends AbstractExclusiveSMM2GameProperty = AbstractExclusiveSMM2GameProperty, GAME_STYLE extends AbstractExclusiveSMM2GameStyleProperty = AbstractExclusiveSMM2GameStyleProperty, THEME extends AbstractExclusiveSMM2ThemeProperty = AbstractExclusiveSMM2ThemeProperty, TIME extends AbstractExclusiveSMM2TimeProperty = AbstractExclusiveSMM2TimeProperty, LIMIT extends PossibleSMM2LimitProperty = PossibleSMM2LimitProperty, >
    = Property<GAME, GAME_STYLE, THEME, TIME, LIMIT>
      & AbstractExclusiveSMM2GameProperty & AbstractExclusiveSMM2GameStyleProperty & AbstractExclusiveSMM2ThemeProperty & AbstractExclusiveSMM2TimeProperty & AbstractExclusiveSMM2LimitProperty
/**@deprecated*/export type ExclusiveSMM2PropertyInSM3DW
    = AbstractExclusiveSMM2Property<ExclusiveSMM2GamePropertyInSM3DW, ExclusiveSMM2GameStylePropertyInSM3DW, ExclusiveSMM2ThemePropertyInSM3DW, ExclusiveSMM2TimePropertyInSM3DW, ExclusiveSMM2LimitPropertyInSM3DW>
      & ExclusiveSMM2GamePropertyInSM3DW & ExclusiveSMM2GameStylePropertyInSM3DW & ExclusiveSMM2ThemePropertyInSM3DW & ExclusiveSMM2TimePropertyInSM3DW & ExclusiveSMM2LimitPropertyInSM3DW
/**@deprecated*/export type ExclusiveSMM2Property
    = AbstractExclusiveSMM2Property<ExclusiveSMM2GameProperty, ExclusiveSMM2GameStyleProperty, ExclusiveSMM2ThemeProperty, ExclusiveSMM2TimeProperty, ExclusiveSMM2LimitProperty>
      & ExclusiveSMM2GameProperty & ExclusiveSMM2GameStyleProperty & ExclusiveSMM2ThemeProperty & ExclusiveSMM2TimeProperty & ExclusiveSMM2LimitProperty
