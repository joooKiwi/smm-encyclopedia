import {LanguageContainer} from './LanguageContainer';
import {OptionalLanguage}  from './OptionalLanguage';

/**
 * @provider
 */
export class OptionalLanguageContainer<S extends | string | never, A extends | readonly string[] | never = never, U extends boolean = boolean, >
    extends LanguageContainer<S, A>
    implements OptionalLanguage<S, A, U> {

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

    export function newInstance<U extends boolean, S extends string, >(value: S,): OptionalLanguage<S, never, U>
    export function newInstance<U extends boolean, A extends readonly string[], >(value: A,): OptionalLanguage<never, A, U>
    export function newInstance<U extends boolean, S extends string, A extends readonly string[], >(value: | S | A,): OptionalLanguage<S, A, U>
    export function newInstance<U extends boolean, S extends string, A extends readonly string[], >(value: | S | A,): OptionalLanguage<S, A, U> {
        return new OptionalLanguageContainer<S, A, U>(value);
    }

}

function isEmptyStringOrUndefined(value: | string | undefined): boolean {
    return value != null && value !== '';
}