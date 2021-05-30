import {AbstractEmptyableStringConverter} from "./AbstractEmptyableStringConverter";

export class StringToEmptyableStringConverter
    extends AbstractEmptyableStringConverter<null | string> {

    public constructor(originalValue: string) {
        super(originalValue);
    }


    protected _convertTheValue(nonEmptyValue: string): null | string {
        return nonEmptyValue;
    }

    public _isValueValid(value: string): boolean {
        return true;
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a non empty value`);
    }

}
