import {AbstractStringConverter} from './AbstractStringConverter'

export class GenericStringToAnyConverter<T, >
    extends AbstractStringConverter<T> {

    //region -------------------- Fields --------------------

    readonly #typeName
    readonly #isValueValidCallback
    readonly #convertTheValueCallback

    //endregion -------------------- Fields --------------------

    public constructor(originalValue: string,
                       typeName: string,
                       isValueValidCallback: (value: string) => boolean,
                       convertTheValueCallback: (validValue: string) => T,) {
        super(originalValue)
        this.#typeName = typeName
        this.#isValueValidCallback = isValueValidCallback
        this.#convertTheValueCallback = convertTheValueCallback
    }

    //region -------------------- Getter methods --------------------

    protected get _typeName() {
        return this.#typeName
    }

    protected get _isValueValidCallback() {
        return this.#isValueValidCallback
    }

    protected get _convertTheValueCallback() {
        return this.#convertTheValueCallback
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected override _convertTheValue(validValue: string,) {
        return this._convertTheValueCallback(validValue)
    }

    protected override _newError() {
        return new TypeError(`The value "${this.originalValue}" could not be converted to a "${this._typeName}".`)
    }

    public override isValueValid(value: string,): boolean {
        return this._isValueValidCallback(value)
    }

    //endregion -------------------- Methods --------------------

}
