/** An interface to help identify a React property */
export interface ReactProperties {}

/** An interface to help identify a React property with a children property */
export interface SimpleReactPropertiesWithChildren<out T, >
    extends ReactProperties {

    readonly children: T

}

export interface SimpleReactPropertiesWithOptionalChildren<out T, >
    extends ReactProperties {

    readonly children?: T

}
