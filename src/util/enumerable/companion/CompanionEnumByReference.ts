import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor} from '@joookiwi/enumerable'
import {CompanionEnum}                                                    from '@joookiwi/enumerable'

export abstract class CompanionEnumByReference<const REFERENCE,
    const ENUM extends Enumerable,
    const ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    public abstract getValueByReference(value: Nullable<| ENUM | REFERENCE>,): ENUM

}
