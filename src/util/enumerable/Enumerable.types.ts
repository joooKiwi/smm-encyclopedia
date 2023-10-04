import type {Enumerable} from '@joookiwi/enumerable'

import type {ClassWithAcronym, ClassWithNullableAcronym} from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                       from 'core/ClassWithEnglishName'
import type {ClassWithType}                              from 'core/ClassWithType'
import type {ClassWithTranslationKey}                    from 'lang/ClassWithTranslationKey'
import type {ClassUsedInRoute}                           from 'route/ClassUsedInRoute'
import type {ClassWithValue}                             from 'util/types/ClassWithValue'

export type EnumerableWithEnglishName<NAME extends string = string, >
    = & Enumerable & ClassWithEnglishName<NAME>

export type EnumerableWithNullableAcronym<ACRONYM extends string = string, >
    = & Enumerable & ClassWithNullableAcronym<ACRONYM>
export type EnumerableWithAcronym<ACRONYM extends string = string, >
    = & Enumerable & ClassWithAcronym<ACRONYM>

export type EnumerableWithEnglishNameAndNullableAcronym<NAME extends string = string, ACRONYM extends string = string, >
    = & Enumerable & ClassWithNullableAcronym<ACRONYM> & ClassWithEnglishName<NAME>
export type EnumerableWithEnglishNameAndAcronym<NAME extends string = string, ACRONYM extends string = string, >
    = & Enumerable & ClassWithAcronym<ACRONYM> & ClassWithEnglishName<NAME>

export type EnumerableWithTranslationKey<TRANSLATION_KEY extends NullOrString = string, > = & Enumerable & ClassWithTranslationKey<TRANSLATION_KEY>

export type EnumerableWithValue<T, > = & Enumerable & ClassWithValue<T>
export type EnumerableWithType<T, > = & Enumerable & ClassWithType<T>

export type EnumerableUsedInRoute<URL_VALUE extends string = string, > = & Enumerable & ClassUsedInRoute<URL_VALUE>
