import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                                    from '@joookiwi/enumerable'

export abstract class CompanionEnumByName<const ENUM extends Enumerable,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public abstract getValueByName(value: Nullable<| ENUM | string>,): ENUM

}
