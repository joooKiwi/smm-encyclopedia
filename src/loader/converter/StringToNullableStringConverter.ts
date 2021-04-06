import {AbstractNullableStringConverter} from "./AbstractNullableStringConverter";

export class StringToNullableStringConverter
    extends AbstractNullableStringConverter<string> {

    public constructor(originalValue: string) {
        super(originalValue);
    }


    protected _convertTheValue(validValue: string): string {
        return validValue;
    }

    protected _isValueValid(nonEmptyValue: string): boolean {
        return true;
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable string`);
    }

}