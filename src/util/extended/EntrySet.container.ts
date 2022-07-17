import {EntrySet} from './EntrySet';

export class EntrySetContainer<K, V, >
    implements EntrySet<K, V> {

    //region -------------------- Fields --------------------

    readonly #key;
    #value;

    //endregion -------------------- Fields --------------------

    public constructor(key: K, value: V,)
    public constructor(entry: EntrySet<K, V>,)
    public constructor(key_or_entry: | K | EntrySet<K, V>, value?: V,) {
        if (typeof key_or_entry == 'object' && 'key' in key_or_entry) {
            this.#key = key_or_entry.key;
            this.#value = key_or_entry.value;
        } else {
            this.#key = key_or_entry;
            this.#value = value!;
        }
    }

    //region -------------------- Getter & setter methods --------------------

    public get key() {
        return this.#key;
    }

    public get value() {
        return this.#value;
    }

    public set value(value: V,) {
        this.#value = value;
    }

    public setValue(value: V,): this {
        this.value = value;
        return this;
    }

    //endregion -------------------- Getter & setter methods --------------------

    public toArray(): readonly [K, V,] {
        return [this.key, this.value,];
    }

}
