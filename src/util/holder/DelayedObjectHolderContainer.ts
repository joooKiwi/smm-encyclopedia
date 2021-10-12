import type {ObjectHolder, ObjectReceived} from './ObjectHolder';

import {ObjectHolderContainer} from './ObjectHolderContainer';

export class DelayedObjectHolderContainer<T>
    implements ObjectHolder<T> {

    #object?: T;
    readonly #callback;

    public constructor(value: ObjectReceived<T>,) {
        this.#callback = () => new ObjectHolderContainer(value).get;
    }


    public get callback(): () => T {
        return this.#callback;
    }

    public get get(): T {
        return this.#object ??= this.#callback();
    }

}
