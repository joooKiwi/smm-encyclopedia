export abstract class AbstractIntermediate<T> {

    //region -------------------- Fields --------------------

    readonly #reference;

    //endregion -------------------- Fields --------------------

    protected constructor(reference: T,) {
        this.#reference = reference;
    }

    //region -------------------- Getter methods --------------------

    protected get _reference(): T {
        return this.#reference;
    }

    //endregion -------------------- Getter methods --------------------

}
