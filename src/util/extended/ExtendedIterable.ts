export interface ExtendedIterable<V1, K, V2>
    extends Iterable<V1> {

    get entries(): IterableIterator<readonly [K, V2]>

    get keys(): IterableIterator<K>

    get values(): IterableIterator<V2>

}
