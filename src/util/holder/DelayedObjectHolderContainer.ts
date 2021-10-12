import {ObjectHolder} from './ObjectHolder';

export class DelayedObjectHolderContainer<T>
    implements ObjectHolder<T> {

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
