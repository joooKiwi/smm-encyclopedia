import {AbstractStringToSingleValueConvertor} from './AbstractStringToSingleValueConvertor';
import {ConverterPatterns}                    from './ConverterPatterns';
import {ConverterUtil}                        from './ConverterUtil';

export class StringToSingleBooleanConverter<B extends boolean, >
    extends AbstractStringToSingleValueConvertor<B> {

    public constructor(originalValue: string, singleValue: B,) {
        super(originalValue, singleValue,);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): B {
        return ConverterUtil.convertToBoolean(validValue) as B;
    }

    public isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value)
            && ConverterUtil.convertToBoolean(value) === this.singleValue;
    }

    //endregion -------------------- Methods --------------------

}