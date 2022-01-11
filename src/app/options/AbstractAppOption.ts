import type {AppOption, AppOptionStatic} from './AppOption';
import type {EnumerableStatic}           from '../../util/enum/EnumerableStatic';

import {Enum} from '../../util/enum/Enum';

export abstract class AbstractAppOption<T, S, O extends number = number, N extends string = string, >
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

    //region -------------------- Getter methods --------------------

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

    public get get(): T {
        return this.__lastValueRetrieved = this._get(this._static.REFERENCE.state);
    }


    protected abstract _set(nextState: S, value: T,): void;

    public set(value: T,): this
    public set(value: T, nextState: S,): this
    public set(value: T, nextState?: S,): this {
        this._static.REFERENCE.setState(previousState => {
            const nextStateReference = nextState ?? {...previousState,};
            this._set(nextStateReference, value,);
            return nextStateReference;
        });
        return this;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Enum methods --------------------

    protected abstract get _static(): EnumerableStatic<O, N> & AppOptionStatic<S>

    //endregion -------------------- Enum methods --------------------

}

