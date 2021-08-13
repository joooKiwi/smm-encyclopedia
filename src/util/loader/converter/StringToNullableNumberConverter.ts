import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter';
import {ConverterPatterns}                from './ConverterPatterns';
import {ConverterUtil}                    from './ConverterUtil';

export class StringToNullableNumberConverter
    extends AbstractEmptyableStringConverter<number> {

    public constructor(originalValue: string,) {
        super(originalValue);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): number {
        return ConverterUtil.convertToNumber(validValue);
    }

    protected _isValueValid(nonEmptyValue: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(nonEmptyValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a number`);
    }

    //endregion -------------------- Methods --------------------

}
