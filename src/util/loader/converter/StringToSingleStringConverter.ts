import {AbstractStringToSingleValueConvertor} from './AbstractStringToSingleValueConvertor';

export class StringToSingleStringConverter<S extends string, >
    extends AbstractStringToSingleValueConvertor<S> {

    public constructor(originalValue: string, singleValue: S,) {
        super(originalValue, singleValue,);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): S {
        return validValue as S;
    }

    public isValueValid(value: string,): boolean {
        return value === this.singleValue;
    }

    //endregion -------------------- Methods --------------------

}