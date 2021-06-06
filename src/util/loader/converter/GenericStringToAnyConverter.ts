import {AbstractStringConverter} from './AbstractStringConverter';

export class GenericStringToAnyConverter<T>
    extends AbstractStringConverter<T> {

    //region -------------------- Attributes --------------------

    readonly #typeName;
    readonly #isValueValidCallback;
    readonly #convertTheValueCallback;

    //endregion -------------------- Attributes --------------------

    public constructor(originalValue: string, typeName: string, isValueValidCallback: (value: string) => boolean, convertTheValueCallback: (validValue: string) => T,) {
        super(originalValue);
        this.#typeName = typeName;
        this.#isValueValidCallback = isValueValidCallback;
        this.#convertTheValueCallback = convertTheValueCallback;
    }

    //region -------------------- Getter --------------------

    protected get typeName() {
        return this.#typeName;
    }

    protected get isValueValidCallback() {
        return this.#isValueValidCallback;
    }

    protected get convertTheValueCallback() {
        return this.#convertTheValueCallback;
    }

    //endregion -------------------- Getter --------------------

    protected _convertTheValue(validValue: string): T {
        return this.convertTheValueCallback(validValue);
    }

    protected _newError(): TypeError {
        return new TypeError(`The value "${this.originalValue}" could not be converted to a "${this.typeName}".`);
    }

    public isValueValid(value: string): boolean {
        return this.isValueValidCallback(value);
    }

}
