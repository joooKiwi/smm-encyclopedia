import type {NullOrString} from 'util/types/nullable'

import {AbstractEmptyableStringConverter} from 'util/loader/converter/AbstractEmptyableStringConverter'
import {ConverterPatterns}                from 'util/loader/converter/ConverterPatterns'
import {ConverterUtil}                    from 'util/loader/converter/ConverterUtil'

export class StringToNullableStringConverter
    extends AbstractEmptyableStringConverter<NullOrString> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToNullableString(validValue)
    }

    protected override _isValueValid(nonEmptyValue: string,) {
        return ConverterPatterns.NULLABLE_STRING_PATTERN.test(nonEmptyValue)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a nullable string`)
    }

    //endregion -------------------- Methods --------------------

}
