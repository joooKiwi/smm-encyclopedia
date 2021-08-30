export class CallbackCaller<T> {

    /**
     * A callback holder that only return null.
     */
    public static readonly NULL = new CallbackCaller(() => null);
    /**
     * A callback holder that only return true.
     */
    public static readonly TRUE = new CallbackCaller(() => true);
    /**
     * A callback holder that only return false.
     */
    public static readonly FALSE = new CallbackCaller(() => false);
    /**
     * A callback holder that only return an empty string.
     */
    public static readonly EMPTY_STRING = new CallbackCaller(() => '');

    #object?: T;
    readonly #callback;

    public constructor(callback: () => T,) {
        this.#callback = callback;
    }

    public get get(): T {
        return this.#object ??= this.#callback();
    }

}
