import type {ClassWithNullableAcronym}   from 'core/ClassWithAcronym'
import type {PossibleAlternativeAcronym} from 'core/limit/Limits.types'
import type {NameTrait}                  from 'lang/name/NameTrait'

export interface AlternativeLimit
    extends NameTrait<string>,
        ClassWithNullableAcronym<PossibleAlternativeAcronym> {}
