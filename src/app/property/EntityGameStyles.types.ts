import type {PossibleSimpleValue} from 'core/gameStyle/GameStyles.types'

enum Enum {
    ALL_GAME_STYLES,
    SUPER_MARIO_BROS,
    SUPER_MARIO_BROS_3,
    SUPER_MARIO_WORLD,
    NEW_SUPER_MARIO_BROS_U,
    SUPER_MARIO_3D_WORLD,
    NOT_INDIVIDUAL_GAME_STYLE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `everyEntity (GameStyle=${| 'all' | PossibleSimpleValue})`
