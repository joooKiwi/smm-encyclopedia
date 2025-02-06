import type {PossibleRouteName as PossibleRouteName_Type} from 'app/property/LimitTypes.types'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    ALL_GAME_STYLES,
    SMB,
    SMB3,
    SMW_OR_NSMBU,
    SM3DW,
    MIXED_GAME_STYLE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `${PossibleRouteName_Type} (GameStyle=${| 'all' | '1' | '3' | 'W&U' | '3DW'})`
