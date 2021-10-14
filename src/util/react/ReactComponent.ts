import type {ReactNode} from 'react';

/**
 * A simplified react component class with a render method.
 * This interface is used to determined each class component easily by using inheritance reference.
 */
export interface ReactComponent<T extends ReactNode = JSX.Element, > {

    render(): T

}
