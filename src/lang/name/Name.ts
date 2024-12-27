import type {ClassWithEveryLanguages} from 'lang/ClassWithEveryLanguages'

/**
 * A generic structure of a name holding a specific type of value.
 */
export interface Name<out T, >
    extends ClassWithEveryLanguages<T> {

    readonly languageValue: T

}
