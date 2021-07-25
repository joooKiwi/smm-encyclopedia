import {AbstractEmptyableStringConverter} from "./AbstractEmptyableStringConverter";
import {ConverterPatterns}                from "./ConverterPatterns";
import {ConverterUtil}                    from "./ConverterUtil";

export class StringToNullableStringConverter
    extends AbstractEmptyableStringConverter<| string | null> {

    public constructor(originalValue: string,) {
        super(originalValue);
    }


    protected _convertTheValue(validValue: string,): | string | null {
        return ConverterUtil.convertToNullableString(validValue);
    }

    protected _isValueValid(nonEmptyValue: string,): boolean {
        return ConverterPatterns.NULLABLE_STRING_PATTERN.test(nonEmptyValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable string`);
    }

}
