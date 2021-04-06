import {AbstractStringConverter} from "./AbstractStringConverter";
import {ConverterPatterns} from "./ConverterPatterns";
import {ConverterUtil} from "./ConverterUtil";

export class StringToNullableValueConverter
    extends AbstractStringConverter<null | string> {

    public constructor(originalValue: string) {
        super(originalValue);
    }


    protected _convertTheValue(validValue: string): null | string {
        return ConverterUtil.convertToNullableValue(validValue);
    }

    public isValueValid(value: string): boolean {
        return ConverterPatterns.NULL_PATTERN.test(value);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable value`);
    }

}