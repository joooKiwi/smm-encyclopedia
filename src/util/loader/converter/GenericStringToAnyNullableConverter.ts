import type {NullOr} from '../../types'

import {GenericStringToAnyConverter} from './GenericStringToAnyConverter'

export class GenericStringToAnyNullableConverter<T, >
    extends GenericStringToAnyConverter<NullOr<T>> {

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return validValue === ''
            ? null
            : super._convertTheValue(validValue)
    }

    public override isValueValid(value: string,): boolean {
        return value === '' || super.isValueValid(value)
    }

    //endregion -------------------- Methods --------------------

}
