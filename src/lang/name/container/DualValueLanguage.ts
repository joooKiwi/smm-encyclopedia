import type {Language} from 'lang/name/container/Language'

/** A {@link Language} instance that holds 2 values in its instance */
export class DualValueLanguage<const T,
    const U, >
    implements Language<| T | U> {

    #all?: readonly [T, U,]
    readonly #first
    readonly #second

    public constructor(first: T, second: U,) {
        this.#first = first
        this.#second = second
    }

    public readonly type = 'dual'
    public get all(): readonly [T, U,] { return this.#all ??= [this.#first, this.#second,] }
    public get first(): T { return this.#first }
    public get second(): U { return this.#second }

}
