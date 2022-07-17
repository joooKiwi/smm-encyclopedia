export abstract class AbstractAppOptionWithSomething<T, > {

    //region -------------------- Fields --------------------

    readonly #callbackToRender;

    //endregion -------------------- Fields --------------------

    protected constructor(callbackToRender: () => T,) {
        this.#callbackToRender = callbackToRender;
    }

    //region -------------------- Getter methods --------------------

    protected get _callbackToRender() {
        return this.#callbackToRender;
    }

    //endregion -------------------- Getter methods --------------------

}
