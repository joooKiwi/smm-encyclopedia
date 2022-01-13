export abstract class AbstractAppOptionWithSomething<T, > {

    //region -------------------- Attributes --------------------

    readonly #callbackToRender;

    //endregion -------------------- Attributes --------------------

    protected constructor(callbackToRender: () => T,) {
        this.#callbackToRender = callbackToRender;
    }

    //region -------------------- Getter methods --------------------

    protected get _callbackToRender() {
        return this.#callbackToRender;
    }

    //endregion -------------------- Getter methods --------------------

}
