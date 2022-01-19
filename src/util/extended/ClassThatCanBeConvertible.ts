import type {ExtendedSet} from './ExtendedSet';
import type {ExtendedMap} from './ExtendedMap';

export interface ClassThatCanBeConvertible<V1, K, V2> {


    toArray(): V1[]


    toSet(): Set<V1>

    toExtendedSet(): ExtendedSet<V1>


    toMap(): Map<K, V2>

    toExtendedMap(): ExtendedMap<K, V2>


    toString(): string

    toLocalString(): string

}
