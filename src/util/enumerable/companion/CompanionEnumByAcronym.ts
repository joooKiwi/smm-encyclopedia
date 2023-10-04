import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import type {EnumerableWithNullableAcronym} from 'util/enumerable/Enumerable.types'
import {getValueByAcronym}                  from 'util/utilitiesMethods'

export class CompanionEnumByAcronym<const ENUM extends EnumerableWithNullableAcronym,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByAcronym(value: Nullable<| ENUM | string>,): ENUM {
        return getValueByAcronym(value, this,)
    }

}
