export class CallbackCaller<T> {

    #object?: T;
    readonly #callback;

    public constructor(callback: () => T) {
        this.#callback = callback;
    }

    public get get(): T {
        return this.#object ?? (this.#object = this.#callback());
    }

}
