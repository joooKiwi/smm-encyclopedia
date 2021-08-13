import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter';
import {ConverterPatterns}                from './ConverterPatterns';
import {ConverterUtil}                    from './ConverterUtil';

export class StringToNullableBooleanConverter
    extends AbstractEmptyableStringConverter<boolean> {

    public constructor(originalValue: string,) {
        super(originalValue);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): boolean {
        return ConverterUtil.convertToBoolean(validValue);
    }

    protected _isValueValid(nonEmptyValue: string,): boolean {
        return ConverterPatterns.BOOLEAN_PATTERN.test(nonEmptyValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable boolean`);
    }

    //endregion -------------------- Methods --------------------

}
