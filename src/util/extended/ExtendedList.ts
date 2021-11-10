import type {ClassThatCanAddItems}      from './ClassThatCanAddItems';
import type {ClassThatCanBeConvertible} from './ClassThatCanBeConvertible';
import type {ClassThatCanGetItems}      from './ClassThatCanGetItems';
import type {ClassThatCanRemoveItems}   from './ClassThatCanRemoveItems';
import type {ClassThatCanSearchItems}   from './ClassThatCanSearchItems';
import type {ClassWithLength}           from './ClassWithLength';
import type {ExtendedIterable}          from './ExtendedIterable';

export interface ExtendedList<T, LENGTH extends number = number, >
    extends ExtendedIterable<number, T>,
        ClassWithLength<LENGTH>,
        ClassThatCanGetItems<T, LENGTH>, ClassThatCanSearchItems<T, LENGTH>,
        ClassThatCanAddItems<T>, ClassThatCanRemoveItems<T>,
        ClassThatCanBeConvertible<number, T> {

    [index: number]: T


    join(separator?: string,): string


    forEach(callback: (value: T, index: LENGTH, list: this,) => void,): void

    map<V>(callback: (value: T, index: LENGTH, list: this,) => V,): ExtendedList<V>


    [Symbol.toStringTag](): string

}

export type DefaultValueIfNotFound = null;
export type DefaultIndexIfNotFound = -1;
export type VariableReturnValue<B extends boolean, V1, V2, > = B extends true ? V1 : B extends false ? V2 : | V1 | V2;
