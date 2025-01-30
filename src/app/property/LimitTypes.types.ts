declare const enum Enum {

    ALL,
    PLAY,
    EDITOR,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = | 'all' | 'play' | 'editor'
/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `${| 'every' | 'play' | 'editor'}Limit`
