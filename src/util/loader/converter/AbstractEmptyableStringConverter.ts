import {AbstractStringConverter} from './AbstractStringConverter';

export abstract class AbstractEmptyableStringConverter<T>
    extends AbstractStringConverter<T | null> {

    protected constructor(originalValue: string,) {
        super(originalValue);
    }

    //region -------------------- Methods --------------------

    public override convertTheValue(value: string,): | T | null {
        return value === '' ? null : super.convertTheValue(value);
    }

    public override isValueValid(value: string,): boolean {
        return value === '' || this._isValueValid(value);
    }

    protected abstract _isValueValid(nonEmptyValue: string,): boolean

    //endregion -------------------- Methods --------------------

}
