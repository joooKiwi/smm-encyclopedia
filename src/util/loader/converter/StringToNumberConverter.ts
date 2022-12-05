import {AbstractStringConverter} from 'util/loader/converter/AbstractStringConverter'
import {ConverterPatterns}       from 'util/loader/converter/ConverterPatterns'

export class StringToNumberConverter
    extends AbstractStringConverter<number> {

    public constructor(originalValue: string,) {
        super(originalValue.toLowerCase())
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return Number(validValue)
    }

    public override isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a number`)
    }

    //endregion -------------------- Methods --------------------

}
