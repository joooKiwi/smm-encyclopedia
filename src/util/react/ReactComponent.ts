import type {ReactNode} from 'react'

import type {ReactState} from 'util/react/ReactState'

/**
 * A simplified React component class with a render method.
 * This interface is used to determine each class component easily by using inheritance reference.
 */
export interface ReactComponent<T extends ReactNode = ReactJSXElement, > {

    render(): T

}

export interface ReactComponentWithState<S extends ReactState, > {

    get state(): Readonly<S>

    /**
     *
     * @param state_or_stateCallback
     * @param callback The callback to call after the current
     * @see Component.setState
     * @see https://reactjs.org/docs/react-component.html#setstate Old Component.setState
     * @see https://react.dev/reference/react/Component#setstate New Component.setState
     */
    setState<K extends keyof S, >(
        state_or_stateCallback: ((previousState: Readonly<S>, properties: Readonly<{}>,) => PossibleState<K, S>) | PossibleState<K, S>,
        callback?: () => void,
    ): void

}

export type PossibleState<K extends keyof S, S extends ReactState, > = NullOr<| Pick<S, K> | S>
