import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter';

export class StringToEmptyableStringConverter
    extends AbstractEmptyableStringConverter<| string | null> {

    public constructor(originalValue: string,) {
        super(originalValue);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(nonEmptyValue: string,): | string | null {
        return nonEmptyValue;
    }

    public _isValueValid(value: string,): boolean {
        return true;
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a non empty value`);
    }

    //endregion -------------------- Methods --------------------

}
