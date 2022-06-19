import type {AppOption, AppOptionStatic} from './AppOption';
import type {EnumerableStatic}           from '../../util/enum/EnumerableStatic';
import type {ReactState}                 from '../../util/react/ReactState';

import {Enum} from '../../util/enum/Enum';

export abstract class AbstractAppOption<T, S extends ReactState, O extends number = number, N extends string = string, >
    extends Enum<O, N>
    implements AppOption<T> {

    //region -------------------- Attributes --------------------

    #lastValueRetrieved?: T;
    readonly #defaultValue: T;

    //endregion -------------------- Attributes --------------------

    protected constructor(defaultValue: T,) {
        super();
        this.#defaultValue = defaultValue;
    }

    //region -------------------- Getter & setter methods --------------------

    protected get _lastValueRetrieved(): T {
        return this.#lastValueRetrieved ??= this._default;
    }

    private set __lastValueRetrieved(value: T,) {
        this.#lastValueRetrieved = value;
    }

    protected get _default(): T {
        return this.#defaultValue;
    }

    protected abstract _get(state: S,): T;

    /**
     * Get the value received on the {@link AppOptionStatic.REFERENCE static reference} {@link ReactState state}.<br/>
     *
     * And set the {@link __lastValueRetrieved last value retrieved} to the value of the current instance.
     *
     * @see _lastValueRetrieved
     */
    public get get(): T {
        return this.__lastValueRetrieved = this.getOn(this._static.REFERENCE.state);
    }


    protected abstract _set(nextState: S, value: T,): void;

    /**
     * Set the value to the {@link AppOptionStatic.REFERENCE static reference} & update its state
     *
     * @param value the value to set
     * @see ReactComponentWithState.setState
     */
    public set(value: T,): this
    public set(value: T, nextState: S,): this
    public set(value: T, nextState?: S,): this {
        this._static.REFERENCE.setState(previousState => {
            const nextStateReference = nextState ?? {...previousState,};
            this.setOn(nextStateReference, value,);
            return nextStateReference;
        });
        return this;
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get the value from a {@link ReactState state received}.
     *
     * @param state a state
     */
    public getOn(state: S,): T {
        return this._get(state,);
    }

    /**
     * Set the value on the {@link ReactState state received}.
     *
     * @param state the state to set the value
     * @param value the value
     */
    public setOn(state: S, value: T,): this {
        this._set(state, value,);
        return this;
    }

    /**
     * Change the {@link ReactState state} of the {@link _static.REFERENCE static reference}.
     *
     * @param state the state to set
     */
    public applyState(state: S,): this {
        this._static.REFERENCE.setState(state,);
        return this;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected abstract override get _static(): EnumerableStatic<O, N> & AppOptionStatic<S>

    //endregion -------------------- Enum methods --------------------

}
