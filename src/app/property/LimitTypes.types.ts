enum Enum {

    ALL,
    PLAY,
    EDITOR,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = | 'all' | 'play' | 'editor'
/** A simple type (not forwarded to the {@link EveryPossibleRouteNames} variable) */
export type PossibleRouteName = `${| 'every' | 'play' | 'editor'}Limit`
