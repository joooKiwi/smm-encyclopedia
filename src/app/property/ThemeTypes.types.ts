enum Enum {

    ALL,
    COURSE,
    WORLD,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = | 'all' | 'course' | 'world'
/** A simple type (not forwarded to the {@link EveryPossibleRouteNames} variable) */
export type PossibleRouteName = `${| 'every' | 'course' | 'world'}Theme`
