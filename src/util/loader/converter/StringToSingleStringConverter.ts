import {AbstractStringToSingleValueConvertor} from 'util/loader/converter/AbstractStringToSingleValueConvertor'

export class StringToSingleStringConverter<S extends string, >
    extends AbstractStringToSingleValueConvertor<S> {

    public constructor(originalValue: string, singleValue: S,) {
        super(originalValue, singleValue,)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return validValue as S
    }

    public override isValueValid(value: string,): boolean {
        return value === this.singleValue
    }

    //endregion -------------------- Methods --------------------

}