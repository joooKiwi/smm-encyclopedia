import type {Nullable} from '@joookiwi/type'

export interface Equalizable<T extends Equalizable<T>> {

    equals(other: Nullable<T>,): boolean

}
