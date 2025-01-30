import type {PossibleSimpleValue} from 'core/game/Games.types'

declare const enum Enum {
    ALL,
    SUPER_MARIO_MAKER,
    SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `everyEditorVoice (Game=${| 'all' | PossibleSimpleValue})`
