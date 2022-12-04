import {AbstractEmptyableStringConverter} from 'util/loader/converter/AbstractEmptyableStringConverter'
import {ConverterPatterns}                from 'util/loader/converter/ConverterPatterns'
import {ConverterUtil}                    from 'util/loader/converter/ConverterUtil'

export class StringToNullableNumberConverter
    extends AbstractEmptyableStringConverter<number> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToNumber(validValue)
    }

    protected override _isValueValid(nonEmptyValue: string,) {
        return ConverterPatterns.NUMBER_PATTERN.test(nonEmptyValue)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a number`)
    }

    //endregion -------------------- Methods --------------------

}
