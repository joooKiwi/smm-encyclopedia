import {GenericCollectionHolder} from '@joookiwi/collection'

/** @todo remove the instance once it can be implemented by a Map directly */
export class CollectionFromMap<const K, const V, >
    extends GenericCollectionHolder<readonly [K, V,]> {

    public constructor(reference: ReadonlyMap<K, V>,) {
        super({
            [Symbol.iterator]() { return reference[Symbol.iterator]() },
            get size() { return reference.size },
        },)
    }

}
