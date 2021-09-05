import {AbstractStringConverter} from './AbstractStringConverter';

export abstract class AbstractStringToSingleValueConvertor<V>
    extends AbstractStringConverter<V> {

    readonly #singleValue: V;

    protected constructor(originalValue: string, singleValue: V,) {
        super(originalValue);
        this.#singleValue = singleValue;
    }

    //region -------------------- Getter methods --------------------

    public get singleValue(): V {
        return this.#singleValue;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected abstract _convertTheValue(validValue: string,): V;

    public abstract isValueValid(value: string,): boolean;

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not "${this.singleValue}".`);
    }


}