import {GenericStringToAnyConverter} from "./GenericStringToAnyConverter";

export class GenericStringToAnyNullableConverter<T>
    extends GenericStringToAnyConverter<T | null> {

    protected _convertTheValue(validValue: string): T | null {
        return validValue == ''
            ? null
            : super._convertTheValue(validValue);
    }

    public isValueValid(value: string): boolean {
        return value == '' && super.isValueValid(value);
    }

}