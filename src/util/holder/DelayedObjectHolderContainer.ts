import {ObjectHolder} from './ObjectHolder';

export class DelayedObjectHolderContainer<T>
    implements ObjectHolder<T> {

    /**
     * A callback holder that only return null.
     */
    public static readonly NULL = new DelayedObjectHolderContainer(() => null);
    /**
     * A callback holder that only return true.
     */
    public static readonly TRUE = new DelayedObjectHolderContainer(() => true);
    /**
     * A callback holder that only return false.
     */
    public static readonly FALSE = new DelayedObjectHolderContainer(() => false);
    /**
     * A callback holder that only return an empty string.
     */
    public static readonly EMPTY_STRING = new DelayedObjectHolderContainer(() => '');
    /**
     * A callback holder that only return an empty array.
     * @note that the never type is used to be used for any possible array.
     */
    public static readonly EMPTY_ARRAY = new DelayedObjectHolderContainer<never[]>(() => []);

    #object?: T;
    readonly #callback;

    public constructor(callback: () => T,) {
        this.#callback = callback;
    }


    public get callback(): () => T {
        return this.#callback;
    }

    public get get(): T {
        return this.#object ??= this.#callback();
    }

}
