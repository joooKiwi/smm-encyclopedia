import type {NullOr} from '../../types'

import {AbstractStringConverter} from './AbstractStringConverter'

export abstract class AbstractEmptyableStringConverter<T, >
    extends AbstractStringConverter<NullOr<T>> {

    protected constructor(originalValue: string,) {
        super(originalValue,)
    }

    //region -------------------- Methods --------------------

    public override convertTheValue(value: string,) {
        return value === '' ? null : super.convertTheValue(value)
    }

    public override isValueValid(value: string,) {
        return value === '' || this._isValueValid(value)
    }

    protected abstract _isValueValid(nonEmptyValue: string,): boolean

    //endregion -------------------- Methods --------------------

}
