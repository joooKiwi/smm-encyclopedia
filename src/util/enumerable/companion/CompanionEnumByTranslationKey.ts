import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import {EnumerableWithTranslationKey} from 'util/enumerable/Enumerable.types'

export class CompanionEnumByTranslationKey<const ENUM extends EnumerableWithTranslationKey,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByValue(value: Nullable<| ENUM | string>,): ENUM {
        if (value == null)
            throw new TypeError(`No "${this.instance.name}" could be found by a null translation key.`,)
        if (value instanceof this.instance)
            return value as ENUM
        const valueFound = this.values.find(it => it.translationKey === value,)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
        return valueFound
    }

}