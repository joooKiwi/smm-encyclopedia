import type {ClassWithLength}                                                     from './ClassWithLength';
import type {DefaultIndexIfNotFound, DefaultValueIfNotFound, VariableReturnValue} from './ExtendedList';

export interface ClassThatCanSearchItems<T, LENGTH extends number = number, >
    extends ClassWithLength<LENGTH> {

    find<B extends boolean, >(callback: (value: T, index: LENGTH, list: this,) => B,): VariableReturnValue<B, T, DefaultValueIfNotFound>

    find<U extends T, >(callback: (value: T, index: LENGTH, list: this,) => value is U,): | U | DefaultValueIfNotFound

    find<B extends boolean, U, >(callback: (value: T, index: LENGTH, list: this,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, T, U>

    find<U extends T, V, >(callback: (value: T, index: LENGTH, list: this,) => value is U, callbackIfNotFound: () => V,): | U | V


    findIndex<B extends boolean, >(callback: (value: T, index: LENGTH, list: this,) => B,): VariableReturnValue<B, LENGTH, DefaultIndexIfNotFound>

    findIndex<U extends LENGTH, >(callback: (value: T, index: LENGTH, list: this,) => index is U,): | U | DefaultValueIfNotFound

    findIndex<B extends boolean, U, >(callback: (value: T, index: LENGTH, list: this,) => B, callbackIfNotFound: () => U,): VariableReturnValue<B, LENGTH, U>

    findIndex<U extends LENGTH, V, >(callback: (value: T, index: LENGTH, list: this,) => index is U, callbackIfNotFound: () => V,): | U | V

}
