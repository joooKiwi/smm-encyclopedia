import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import {getValueByUrlValue}    from 'util/utilitiesMethods'
import {EnumerableUsedInRoute} from 'util/enumerable/Enumerable.types'

export class CompanionEnumByUrlValue<const ENUM extends EnumerableUsedInRoute,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByUrlValue(value: Nullable<| ENUM | string>,): ENUM {
        return getValueByUrlValue(value, this,)
    }

}
