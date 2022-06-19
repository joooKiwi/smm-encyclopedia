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

    protected abstract override _convertTheValue(validValue: string,): V;

    public abstract override isValueValid(value: string,): boolean;

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not "${this.singleValue}".`);
    }


}