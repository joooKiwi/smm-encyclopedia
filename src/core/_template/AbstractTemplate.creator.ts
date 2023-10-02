export abstract class AbstractTemplateCreator<TEMPLATE extends object, CONTENT extends object, > {

    //region -------------------- Fields --------------------

    readonly #content

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(content: CONTENT,) {
        this.#content = content
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _content() {
        return this.#content
    }

    //endregion -------------------- Getter methods --------------------

    /** Create the template */
    public abstract create(): TEMPLATE

}
