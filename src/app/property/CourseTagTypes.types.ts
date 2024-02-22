enum Enum {

    ALL,
    OFFICIAL,
    UNOFFICIAL,
    MAKER_CENTRAL,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = | 'all' | 'official' | 'unofficial' | 'makerCentral'
/** A possible route name (not forwarded to the {@link import('route/EveryRoutes.types').PossibleRouteName} variable) */
export type PossibleRouteName = `${| 'every' | 'official' | 'unofficial' | 'makerCentral'}CourseTag`
