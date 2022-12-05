import {AbstractStringConverter} from 'util/loader/converter/AbstractStringConverter'
import {ConverterPatterns}       from 'util/loader/converter/ConverterPatterns'
import {ConverterUtil}           from 'util/loader/converter/ConverterUtil'

export class StringToBooleanConverter
    extends AbstractStringConverter<boolean> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToBoolean(validValue)
    }

    public override isValueValid(value: string,): boolean {
        return ConverterPatterns.BOOLEAN_PATTERN.test(value)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a boolean`)
    }

    //endregion -------------------- Methods --------------------

}
