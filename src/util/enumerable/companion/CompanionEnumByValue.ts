import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import type {Nullable}                                        from '@joookiwi/type'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import {EnumerableWithValue} from 'util/enumerable/Enumerable.types'

export class CompanionEnumByValue<const T,
    const ENUM extends EnumerableWithValue<T>,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByValue(value: Nullable<| ENUM | T>,): ENUM {
        if (value == null)
            throw new TypeError(`No "${this.instance.name}" could be found by a null value.`,)
        if (value instanceof this.instance)
            return value as ENUM
        const valueFound = this.values.findFirstOrNull(it => it.value === value,)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
        return valueFound
    }

}
