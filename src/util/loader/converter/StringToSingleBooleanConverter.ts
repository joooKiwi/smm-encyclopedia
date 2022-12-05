import {AbstractStringToSingleValueConvertor} from 'util/loader/converter/AbstractStringToSingleValueConvertor'
import {ConverterPatterns}                    from 'util/loader/converter/ConverterPatterns'
import {ConverterUtil}                        from 'util/loader/converter/ConverterUtil'

export class StringToSingleBooleanConverter<B extends boolean, >
    extends AbstractStringToSingleValueConvertor<B> {

    public constructor(originalValue: string, singleValue: B,) {
        super(originalValue, singleValue,)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return ConverterUtil.convertToBoolean(validValue) as B
    }

    public override isValueValid(value: string,): boolean {
        return ConverterPatterns.NUMBER_PATTERN.test(value)
            && ConverterUtil.convertToBoolean(value) === this.singleValue
    }

    //endregion -------------------- Methods --------------------

}