import {Converter} from "./Converter";

export abstract class AbstractStringConverter<T>
    implements Converter<string, T> {

    readonly #originalValue;
    #convertedValue!: T;

    protected constructor(originalValue: string) {
        this.#originalValue = originalValue;
    }

    public get convertedValue(): T {
        return this.#convertedValue ?? (this.#convertedValue = this.convertTheValue(this.originalValue));
    }

    public get originalValue() {
        return this.#originalValue;
    }

    public convertTheValue(value: string): T {
        if (this.isValueValid(value))
            return this._convertTheValue(value);
        throw this._newError();
    }

    protected abstract _convertTheValue(validValue: string): T;

    public abstract isValueValid(value: string): boolean;

    protected abstract _newError(): TypeError;


}