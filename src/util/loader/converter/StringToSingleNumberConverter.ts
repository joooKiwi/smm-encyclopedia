import {AbstractStringToSingleValueConvertor} from './AbstractStringToSingleValueConvertor'
import {ConverterPatterns}                    from './ConverterPatterns'
import {ConverterUtil}                        from './ConverterUtil'

export class StringToSingleNumberConverter<N extends number, >
    extends AbstractStringToSingleValueConvertor<N> {

    public constructor(originalValue: string, singleValue: N,) {
        super(originalValue, singleValue,)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToNumber(validValue) as N
    }

    public override isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value)
            && ConverterUtil.convertToNumber(value) === this.singleValue
    }

    //endregion -------------------- Methods --------------------

}