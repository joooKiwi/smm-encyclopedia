import type {ObjectHolder, ValueOrCallbackValue} from './ObjectHolder';

export class ObjectHolderContainer<T>
    implements ObjectHolder<T> {

    readonly #value;

    public constructor(value: ValueOrCallbackValue<T>,) {
        this.#value = value instanceof Function ? value() : value;
    }

    public get get() {
        return this.#value;
    }

}