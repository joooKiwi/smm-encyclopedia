import {AbstractStringConverter} from './AbstractStringConverter';

export class StringToSingleStringConverter<S extends string, >
    extends AbstractStringConverter<S> {

    readonly #singleValue: S;

    public constructor(originalValue: string, singleValue: S,) {
        super(originalValue);
        this.#singleValue = singleValue;
    }

    //region -------------------- Getter methods --------------------

    public get singleValue(): S {
        return this.#singleValue;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): S {
        return validValue as S;
    }

    public isValueValid(value: string,): boolean {
        return value === this.singleValue;
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not "${this.singleValue}".`);
    }

    //endregion -------------------- Methods --------------------

}