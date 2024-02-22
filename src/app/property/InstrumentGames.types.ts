enum Enum {
    SUPER_MARIO_MAKER,
    SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,
    SUPER_MARIO_MAKER_2,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A type (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `everyInstrument (${| 'list' | 'card'} Game=${| 1 | '3DS' | 2})`
