import type {Builder} from '../util/Builder';

export abstract class TemplateBuilder<T, U, >
    implements Builder<U> {

    //region -------------------- Attributes --------------------

    readonly #template;

    //endregion -------------------- Attributes --------------------

    protected constructor(template: T,) {
        this.#template = template;
    }


    public get template(): T {
        return this.#template;
    }

    public abstract build(): U;

}
