import {ExtendedSet} from './ExtendedSet';

export interface ClassThatCanBeConvertible<K extends number, V> {

    toMap(): Map<K, V>

    toArray(): V[]


    toSet(): Set<V>

    toExtendedSet(): ExtendedSet<V>


    toString(): string

    toLocalString(): string
}
