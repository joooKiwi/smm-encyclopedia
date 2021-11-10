export interface ExtendedIterable<K, V>
    extends Iterable<V> {

    get entries(): IterableIterator<[K, V]>

    get keys(): IterableIterator<K>

    get values(): IterableIterator<V>

}
