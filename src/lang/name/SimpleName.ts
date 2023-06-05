import type {ClassWithEveryLanguages} from 'lang/ClassWithEveryLanguages'

export interface SimpleName<T extends NonNullable<unknown>, >
    extends ClassWithEveryLanguages<T> {

    get languageValue(): T

}