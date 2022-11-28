import type {NullOrString} from '../../types'

import {AbstractEmptyableStringConverter} from './AbstractEmptyableStringConverter'

export class StringToEmptyableStringConverter
    extends AbstractEmptyableStringConverter<NullOrString> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(nonEmptyValue: string,) {
        return nonEmptyValue
    }

    protected override _isValueValid(value: string,) {
        return true
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a non empty value`)
    }

    //endregion -------------------- Methods --------------------

}
