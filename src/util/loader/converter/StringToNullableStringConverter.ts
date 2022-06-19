import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter';
import {ConverterPatterns}                from './ConverterPatterns';
import {ConverterUtil}                    from './ConverterUtil';

export class StringToNullableStringConverter
    extends AbstractEmptyableStringConverter<| string | null> {

    public constructor(originalValue: string,) {
        super(originalValue);
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToNullableString(validValue);
    }

    protected override _isValueValid(nonEmptyValue: string,) {
        return ConverterPatterns.NULLABLE_STRING_PATTERN.test(nonEmptyValue);
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable string`);
    }

    //endregion -------------------- Methods --------------------

}
