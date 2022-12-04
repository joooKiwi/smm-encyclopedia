import {AbstractStringToSingleValueConvertor} from 'util/loader/converter/AbstractStringToSingleValueConvertor'
import {ConverterPatterns}                    from 'util/loader/converter/ConverterPatterns'
import {ConverterUtil}                        from 'util/loader/converter/ConverterUtil'

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