import type {NullOr}        from '@joookiwi/type'

import type {Language} from 'lang/name/container/Language'

/** A {@link Language} instance that holds a single value in its instance */
export class SingleValueLanguage<const T, >
    implements Language<NullOr<T>> {

    readonly #value

    public constructor(value: T,) { this.#value = value }

    public readonly type = 'single'
    public get all(): T { return this.#value }
    public get first(): T { return this.#value }
    public get second(): null { return null }

}
