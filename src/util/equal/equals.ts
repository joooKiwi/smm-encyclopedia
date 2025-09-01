import type {Nullable}    from '@joookiwi/type'

import type {Equalizable} from 'util/equal/Equalizable'

export function equals<const T extends Equalizable<T>, >(thiz: Nullable<T>, other: Nullable<T>,): boolean {
    if (thiz == null)
        return other == null

    if (other == null)
        return false
    return thiz.equals(other,)
}
