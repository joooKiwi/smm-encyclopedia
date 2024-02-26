import type {PossibleUrlValue}                        from 'app/withInterpreter/ViewDisplays.types'
import type {FullGroupUrlName, FullGroupUrlName_SMM1} from 'core/gameStyle/GameStyles.types'

enum Enum {
    ALL,
    SUPER_MARIO_MAKER,
    SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = | `everyEntity (${PossibleUrlValue} Game=${| 'all' | 2} ${FullGroupUrlName})`
                                | `everyEntity (${PossibleUrlValue} Game=${| 1 | '3DS'} ${FullGroupUrlName_SMM1})`
