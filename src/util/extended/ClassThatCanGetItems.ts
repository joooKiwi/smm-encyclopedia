import type {ClassWithLength}                                from './ClassWithLength';
import type {DefaultIndexIfNotFound, DefaultValueIfNotFound} from './ExtendedList';

export interface ClassThatCanGetItems<T, LENGTH extends number = number, >
    extends ClassWithLength<LENGTH> {

    has(value: T,): boolean

    includes(value: T,): boolean


    get(value: T,): LENGTH

    get(value: any,): | LENGTH | DefaultIndexIfNotFound


    getIndex(index: LENGTH,): T

    getIndex(index: number,): T | DefaultValueIfNotFound

}