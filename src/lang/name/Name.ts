import type {ClassWithEveryLanguages} from 'lang/ClassWithEveryLanguages'

/**
 * A generic structure of a name holding a specific type of value.
 */
export interface Name<T, >
    extends ClassWithEveryLanguages<T> {

    get languageValue(): T

}
