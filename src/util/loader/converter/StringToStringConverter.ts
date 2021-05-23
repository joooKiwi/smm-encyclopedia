import {AbstractStringConverter} from "./AbstractStringConverter";

export class StringToStringConverter
    extends AbstractStringConverter<string> {


    public constructor(originalValue: string) {
        super(originalValue);
    }

    protected _convertTheValue(validValue: string): string {
        return validValue;

    }

    public isValueValid(value: string): boolean {
        return true;
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a string`);
    }


}