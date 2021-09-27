import {LanguageContainer} from './LanguageContainer';
import {OptionalLanguage}  from './OptionalLanguage';

/**
 * @provider
 */
export class OptionalLanguageContainer<U extends boolean, S extends | string | never, A extends | readonly string[] | never = never, >
    extends LanguageContainer<S, A>
    implements OptionalLanguage<U, S, A> {

    readonly #isUsed;

    public constructor(value: | S | A,) {
        super(value);
        this.#isUsed = isEmptyStringOrUndefined(this.get()) && isEmptyStringOrUndefined(this.get(0)) && isEmptyStringOrUndefined(this.get(2));
    }

    public get isUsed() {
        return this.#isUsed as U;
    }

}

export namespace OptionalLanguageContainer {

    export function newInstance<U extends boolean, S extends string, >(value: S,): OptionalLanguage<U, S>
    export function newInstance<U extends boolean, A extends readonly string[], >(value: A,): OptionalLanguage<U, never, A>
    export function newInstance<U extends boolean, S extends string, A extends readonly string[], >(value: | S | A,): OptionalLanguage<U, S, A>
    export function newInstance<U extends boolean, S extends string, A extends readonly string[], >(value: | S | A,): OptionalLanguage<U, S, A> {
        return new OptionalLanguageContainer<U, S, A>(value);
    }

}

function isEmptyStringOrUndefined(value: | string | undefined): boolean {
    return value != null && value !== '';
}