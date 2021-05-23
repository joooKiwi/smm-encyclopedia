import {AbstractEmptyableStringConverter} from "./AbstractEmptyableStringConverter";
import {ConverterUtil}                    from "./ConverterUtil";
import {ConverterPatterns}                from "./ConverterPatterns";

export class StringToNullableBooleanConverter
    extends AbstractEmptyableStringConverter<boolean> {

    public constructor(originalValue: string) {
        super(originalValue);
    }


    protected _convertTheValue(validValue: string): boolean {
        return ConverterUtil.convertToBoolean(validValue);
    }

    protected _isValueValid(nonEmptyValue: string): boolean {
        return ConverterPatterns.BOOLEAN_PATTERN.test(nonEmptyValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable boolean`);
    }

}