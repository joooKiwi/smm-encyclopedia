export abstract class TemplateCreator<TEMPLATE, OBJECT, > {

    readonly #template: TEMPLATE

    protected constructor(template: TEMPLATE,) {
        this.#template = template
    }

    public get template(): TEMPLATE {
        return this.#template
    }

    /** Create the finalized object based on the template received. */
    public abstract create(): OBJECT

}
