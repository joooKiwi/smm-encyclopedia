import type {Builder} from '../../util/builder/Builder';

export abstract class TemplateBuilder<T, U, >
    implements Builder<U> {

    //region -------------------- Fields --------------------

    #template?: T;
    readonly #templateBuilder_or_template;

    //endregion -------------------- Fields --------------------

    protected constructor(template: T,)
    protected constructor(templateBuilder: Builder<T>,)
    protected constructor(templateBuilder_or_template: | T | Builder<T>,)
    protected constructor(templateBuilder_or_template: | T | Builder<T>,) {
        this.#templateBuilder_or_template = templateBuilder_or_template;
    }


    public get template(): T {
        return this.#template ??= 'build' in this.#templateBuilder_or_template ? this.#templateBuilder_or_template.build() : this.#templateBuilder_or_template;
    }

    public abstract build(): U;

}
