import type {PossibleSimpleValue} from 'core/gameStyle/GameStyles.types'

enum Enum {
    ALL_GAME_STYLES,
    SMB,
    SMB3,
    SMW,
    NSMBU,
    SM3DW,
    MIXED_GAME_STYLE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `everySoundEffect (GameStyle=${| 'all' | PossibleSimpleValue})`
