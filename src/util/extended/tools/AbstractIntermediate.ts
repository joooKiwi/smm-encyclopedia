export abstract class AbstractIntermediate<T> {

    //region -------------------- Attributes --------------------

    readonly #reference;

    //endregion -------------------- Attributes --------------------

    protected constructor(reference: T,) {
        this.#reference = reference;
    }

    //region -------------------- Getter methods --------------------

    protected get _reference(): T {
        return this.#reference;
    }

    //endregion -------------------- Getter methods --------------------

}
