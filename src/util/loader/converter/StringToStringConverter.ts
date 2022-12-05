import {AbstractStringConverter} from 'util/loader/converter/AbstractStringConverter'

export class StringToStringConverter
    extends AbstractStringConverter<string> {

    public constructor(originalValue: string,) {
        super(originalValue)
    }

    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return validValue

    }

    public override isValueValid(value: string,): boolean {
        return true
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" is not convertible to a string`)
    }

    //endregion -------------------- Methods --------------------

}
