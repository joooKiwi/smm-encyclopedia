export interface EntrySet<K, V, > {

    get key(): K

    get value(): V

    set value(value: V,)

    setValue(value:V,):this


    toArray(): readonly [K, V,]

}
