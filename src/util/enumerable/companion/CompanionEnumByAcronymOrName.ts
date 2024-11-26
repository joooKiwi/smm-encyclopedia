import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'
import type {Nullable}                                        from '@joookiwi/type'
import {CompanionEnum}                                        from '@joookiwi/enumerable'

import type {EnumerableWithEnglishNameAndNullableAcronym} from 'util/enumerable/Enumerable.types'
import type {CompanionEnumByAcronym}                      from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByEnglishNameOnly}              from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

import {getValueByAcronym, getValueByEnglishName} from 'util/utilitiesMethods'

export class CompanionEnumByAcronymOrName<const ENUM extends EnumerableWithEnglishNameAndNullableAcronym,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR>
    implements CompanionEnumByAcronym<ENUM, ENUM_CONSTRUCTOR>,
        CompanionEnumByEnglishNameOnly<ENUM, ENUM_CONSTRUCTOR> {

    public getValueByAcronym(value: Nullable<string | ENUM>,): ENUM {
        return getValueByAcronym(value, this,)
    }

    public getValueByName(value: Nullable<string | ENUM>,): ENUM {
        return getValueByEnglishName(value, this,)
    }

}
