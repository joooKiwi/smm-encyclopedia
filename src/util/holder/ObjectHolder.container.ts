import type {ObjectHolder, PossibleValueOnObjectHolder} from './ObjectHolder';

export class ObjectHolderContainer<T>
    implements ObjectHolder<T> {

    readonly #value;

    public constructor(value: PossibleValueOnObjectHolder<T>,) {
        this.#value = ObjectHolderContainer.#retrieveValue(value,);
    }

    static #retrieveValue<T, >(value: PossibleValueOnObjectHolder<T>,): T {
        return value == null
            ? value
            : value instanceof Function
                ? value()
                : typeof value == 'object' && 'get' in value
                    ? this.#retrieveValue(value.get,)
                    : value;
    }

    public get get(): T {
        return this.#value;
    }

}
