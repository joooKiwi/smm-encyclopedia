import type {ReactElement as SourceReactElement} from 'react';

/**
 * A simple interface to help identify a react property
 */
export interface ReactProperty {

}

/**
 * A simple type used simplify the use of a parameter without the need of creating an interface or a new type.
 */
export type ReactPropertyWithChildren<T extends object, CHILDREN, > = T & SimpleReactPropertyWithChildren<CHILDREN>;

/**
 * A simple interface to help identify a react property with a children property
 */
export interface SimpleReactPropertyWithChildren<T>
    extends ReactProperty {

    children: T

}

export type ReactElement = SourceReactElement;
export type ReactElementOrString = | SourceReactElement | string;
