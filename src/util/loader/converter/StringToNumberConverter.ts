import {AbstractStringConverter} from './AbstractStringConverter';
import {ConverterPatterns}       from './ConverterPatterns';

export class StringToNumberConverter
    extends AbstractStringConverter<number> {

    public constructor(originalValue: string,) {
        super(originalValue.toLowerCase());
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): number {
        return Number(validValue);
    }

    public isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a number`);
    }

    //endregion -------------------- Methods --------------------

}
