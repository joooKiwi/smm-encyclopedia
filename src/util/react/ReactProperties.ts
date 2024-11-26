/** An interface to help identify a React property */
export interface ReactProperties {}

/**
 * A type-alias to have the {@link ReactProperties} with a children field
 *
 * @see SimpleReactPropertiesWithChildren
 */
export type ReactPropertiesWithChildren<T extends object, CHILDREN, > = T & SimpleReactPropertiesWithChildren<CHILDREN>
/**
 * A type-alias to have of the {@link ReactProperties} with an optional children fields
 *
 * @see SimpleReactPropertiesWithOptionalChildren
 */
export type ReactPropertiesWithOptionalChildren<T extends object, CHILDREN, > = T & SimpleReactPropertiesWithOptionalChildren<CHILDREN>

/** An interface to help identify a React property with a children property */
export interface SimpleReactPropertiesWithChildren<T, >
    extends ReactProperties {

    readonly children: T

}

export interface SimpleReactPropertiesWithOptionalChildren<T, >
    extends ReactProperties {

    readonly children?: T

}
