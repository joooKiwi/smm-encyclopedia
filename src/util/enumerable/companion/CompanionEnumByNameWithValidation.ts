import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor} from '@joookiwi/enumerable'
import type {Nullable}                                                    from '@joookiwi/type'

import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

export abstract class CompanionEnumByNameWithValidation<const ENUM extends Enumerable,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnumByName<ENUM, ENUM_CONSTRUCTOR> {

    public abstract hasValueByName(value: Nullable<| ENUM | string>,): boolean

}
