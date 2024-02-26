import type {PossibleUrlValue}                                                  from 'app/withInterpreter/ViewDisplays.types'
import type {PossibleSimpleValue, PossibleSimpleValue_SMM1}                     from 'core/gameStyle/GameStyles.types'
import type {FullGroupValidUrlName_WithNotSMM2, FullGroupValidUrlName_WithSMM2} from 'core/game/Games.types'

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
export type PossibleRouteName = | `everyEntity (${PossibleUrlValue} ${FullGroupValidUrlName_WithSMM2} GameStyle=${| 'all' | PossibleSimpleValue})`
                                | `everyEntity (${PossibleUrlValue} ${FullGroupValidUrlName_WithNotSMM2} GameStyle=${| 'all' | PossibleSimpleValue_SMM1})`
