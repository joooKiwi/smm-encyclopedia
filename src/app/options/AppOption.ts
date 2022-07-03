import {ReactComponentWithState} from '../../util/react/ReactComponent';

/**@deprecated*/export interface AppOption<T, > {

    get get(): T

    set(value: T,): this

}

/**@deprecated*/export interface AppOptionStatic<S> {

    get REFERENCE(): ReactComponentWithState<S>

    set REFERENCE(app: ReactComponentWithState<S>,)

    get createDefaultState(): S

}
