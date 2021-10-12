import {ObjectHolder} from './ObjectHolder';

export class ObjectHolderContainer<T>
    implements ObjectHolder<T> {

    readonly #value;

    public constructor(value: T,) {
        this.#value = value;
    }

    public get get() {
        return this.#value;
    }

}
