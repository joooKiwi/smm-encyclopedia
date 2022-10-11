import type {ReactElement as SourceReactElement} from 'react'

/** A simple interface to help identify a react property */
export interface ReactProperties {

}

/**
 * A simple type to have the {@link ReactProperties} with a children field
 *
 * @see SimpleReactPropertiesWithChildren
 */
export type ReactPropertiesWithChildren<T extends object, CHILDREN, > = T & SimpleReactPropertiesWithChildren<CHILDREN>
/**
 * A simple type to have of the {@link ReactProperties} with an optional children fields
 *
 * @see SimpleReactPropertiesWithOptionalChildren
 */
export type ReactPropertiesWithOptionalChildren<T extends object, CHILDREN, > = T & SimpleReactPropertiesWithOptionalChildren<CHILDREN>

/** A simple interface to help identify a react property with a children property */
export interface SimpleReactPropertiesWithChildren<T, >
    extends ReactProperties {

    children: T

}

export interface SimpleReactPropertiesWithOptionalChildren<T, >
    extends ReactProperties {

    children?: T

}

export type ReactElement = SourceReactElement
export type ReactElementOrString = | ReactElement | string
