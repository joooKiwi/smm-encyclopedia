import type {OptionalLanguage} from './OptionalLanguage';

import {LanguageContainer} from './LanguageContainer';

/**
 * @provider
 */
export class OptionalLanguageContainer<T, S extends T = T, A extends readonly T[] = readonly [], U extends boolean = boolean, >
    extends LanguageContainer<T, S, A>
    implements OptionalLanguage<T, S, A, U> {

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

    export function newInstance<T, U extends boolean, S extends T, >(value: T,): OptionalLanguage<T, S, never, U>
    export function newInstance<T, U extends boolean, A extends readonly T[], >(value: A,): OptionalLanguage<T, never, A, U>
    export function newInstance<T, U extends boolean, S extends T, A extends readonly T[], >(value: | S | A,): OptionalLanguage<T, S, A, U>
    export function newInstance<T, >(value: | T | readonly T[],): OptionalLanguage<T, T, readonly T[]> {
        return new OptionalLanguageContainer<T, T, readonly T[]>(value);
    }

}

function isEmptyStringOrUndefined<T, >(value: | T | undefined | null,): boolean {
    return typeof value == 'string'
        ? value !== ''
        : value != null;
}
