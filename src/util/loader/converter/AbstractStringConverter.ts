import type {Converter} from './Converter';

export abstract class AbstractStringConverter<T>
    implements Converter<string, T> {

    //region -------------------- Attributes --------------------

    readonly #originalValue;
    #convertedValue?: T;

    //endregion -------------------- Attributes --------------------

    protected constructor(originalValue: string,) {
        this.#originalValue = originalValue;
    }

    //region -------------------- Getter methods --------------------

    public get convertedValue(): T {
        return this.#convertedValue ??= this.convertTheValue(this.originalValue);
    }

    public get originalValue() {
        return this.#originalValue;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public convertTheValue(value: string,): T {
        if (this.isValueValid(value))
            return this._convertTheValue(value);
        throw this._newError();
    }

    protected abstract _convertTheValue(validValue: string,): T;

    public abstract isValueValid(value: string,): boolean;

    protected abstract _newError(): TypeError;

    //endregion -------------------- Methods --------------------

}
