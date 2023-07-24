/**
 * A generic property with a value contained in it.
 */
export interface Property<T> {

    get value(): T

}

export type DefaultIsUnknown = false
export type DefaultAmount = null
export type DefaultComment = null
