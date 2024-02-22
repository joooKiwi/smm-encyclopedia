import type {PossibleRouteName as PossibleRouteName_Type} from 'app/property/ThemeTypes.types'
import type {PossibleUrlValue}                            from 'app/withInterpreter/ViewDisplays.types'

enum Enum {
    ALL,
    SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A type (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `${PossibleRouteName_Type} (${PossibleUrlValue} Game=${| 1 | 2})`
