import type {CompanionEnumDeclaration, EnumerableConstructor} from '@joookiwi/enumerable'

import type {EnumerableWithEnglishName} from 'util/enumerable/Enumerable.types'

import {getValueByEnglishName} from 'util/utilitiesMethods'
import {CompanionEnumByName}   from 'util/enumerable/companion/CompanionEnumByName'

export class CompanionEnumByEnglishNameOnly<const ENUM extends EnumerableWithEnglishName,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumByName<ENUM, ENUM_CONSTRUCTOR> {

    public override getValueByName(value: Nullable<| ENUM | string>,): ENUM {
        return getValueByEnglishName(value, this,)
    }

}
