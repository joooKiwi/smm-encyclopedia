enum Enum {

    ALL,
    COURSE,
    WORLD,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = | 'all' | 'course' | 'world'
/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `${| 'every' | 'course' | 'world'}Theme`
