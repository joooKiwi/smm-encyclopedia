import type {PossibleSimpleValue_SMM1} from 'core/gameStyle/GameStyles.types'

declare const enum Enum {
    ALL_GAME_STYLES,
    SMB,
    SMB3,
    SMW,
    NSMBU,
    MIXED_GAME_STYLE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `everyInstrument (GameStyle=${| 'all' | PossibleSimpleValue_SMM1})`
