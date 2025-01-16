/** An interface to help identify a React property */
export interface ReactProperties {}

/**
 * An interface of {@link ReactProperties} with a children property
 *
 * @see ReactPropertiesWithOptionalChildren
 */
export interface ReactPropertiesWithChildren<out T, >
    extends ReactProperties {

    readonly children: T

}

/**
 * An interface of {@link ReactProperties} with an optional children property
 *
 * @see ReactPropertiesWithChildren
 */
export interface ReactPropertiesWithOptionalChildren<out T, >
    extends ReactProperties {

    readonly children?: T

}
