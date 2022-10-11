import type {ReactNode}  from 'react'
import type {ReactState} from './ReactState'

/**
 * A simplified react component class with a render method.
 * This interface is used to determined each class component easily by using inheritance reference.
 */
export interface ReactComponent<T extends ReactNode = JSX.Element, > {

    render(): T

}

export interface ReactComponentWithState<S extends ReactState, > {

    get state(): Readonly<S>

    /**
     *
     * @param state_or_stateCallback
     * @param callback The callback to call after the current
     * @see Component.setState
     * @see https://reactjs.org/docs/react-component.html#setstate
     */
    setState<K extends keyof S, >(
        state_or_stateCallback: ((previousState: Readonly<S>, properties: Readonly<{}>,) => PossibleState<K, S>) | PossibleState<K, S>,
        callback?: () => void,
    ): void

}

export type PossibleState<K extends keyof S, S extends ReactState, > = | Pick<S, K> | S | null
