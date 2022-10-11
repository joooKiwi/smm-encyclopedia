import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter'
import {ConverterPatterns}                from './ConverterPatterns'
import {ConverterUtil}                    from './ConverterUtil'

export class StringToNullableBooleanConverter
    extends AbstractEmptyableStringConverter<boolean> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToBoolean(validValue)
    }

    protected override _isValueValid(nonEmptyValue: string,) {
        return ConverterPatterns.BOOLEAN_PATTERN.test(nonEmptyValue)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable boolean`)
    }

    //endregion -------------------- Methods --------------------

}
