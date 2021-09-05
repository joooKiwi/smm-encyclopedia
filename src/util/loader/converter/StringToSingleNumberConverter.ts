import {AbstractStringToSingleValueConvertor} from './AbstractStringToSingleValueConvertor';
import {ConverterPatterns}                    from './ConverterPatterns';
import {ConverterUtil}                        from './ConverterUtil';

export class StringToSingleNumberConverter<N extends number, >
    extends AbstractStringToSingleValueConvertor<N> {

    public constructor(originalValue: string, singleValue: N,) {
        super(originalValue, singleValue,);
    }

    //region -------------------- Methods --------------------

    protected _convertTheValue(validValue: string,): N {
        return ConverterUtil.convertToNumber(validValue) as N;
    }

    public isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value)
            && ConverterUtil.convertToNumber(value) === this.singleValue;
    }

    //endregion -------------------- Methods --------------------

}