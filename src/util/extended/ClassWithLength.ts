export interface ClassWithLength<T extends number = number, > {

    get size(): this['length']

    get length(): T

}
