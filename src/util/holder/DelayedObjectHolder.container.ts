import type {ObjectHolder, PossibleValueOnObjectHolder} from './ObjectHolder';

import {ObjectHolderContainer} from './ObjectHolder.container';

export class DelayedObjectHolderContainer<T>
    implements ObjectHolder<T> {

    #object?: T;
    readonly #callback;

    public constructor(value: PossibleValueOnObjectHolder<T>,) {
        this.#callback = () => new ObjectHolderContainer(value).get;
    }


    public get callback(): () => T {
        return this.#callback;
    }

    public get get(): T {
        return this.#object ??= this.#callback();
    }

}
