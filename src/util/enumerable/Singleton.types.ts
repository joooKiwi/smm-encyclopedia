import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor, Singleton} from '@joookiwi/enumerable'

import type {EnumerableUsedInRoute, EnumerableWithEnglishNameAndNullableAcronym, EnumerableWithNullableAcronym, EnumerableWithTranslationKey, EnumerableWithType, EnumerableWithValue} from 'util/enumerable/Enumerable.types'
import type {CompanionEnumByAcronym}                                                                                                                                                   from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByAcronymOrName}                                                                                                                                             from 'util/enumerable/companion/CompanionEnumByAcronymOrName'
import type {CompanionEnumByName}                                                                                                                                                      from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByReference}                                                                                                                                                 from 'util/enumerable/companion/CompanionEnumByReference'
import type {CompanionEnumByTranslationKey}                                                                                                                                            from 'util/enumerable/companion/CompanionEnumByTranslationKey'
import type {CompanionEnumByType}                                                                                                                                                      from 'util/enumerable/companion/CompanionEnumByType'
import type {CompanionEnumByUrlValue}                                                                                                                                                  from 'util/enumerable/companion/CompanionEnumByUrlValue'
import type {CompanionEnumByValue}                                                                                                                                                     from 'util/enumerable/companion/CompanionEnumByValue'
import type {CompanionEnumDualRetrievableInUrl}                                                                                                                                        from 'util/enumerable/companion/CompanionEnumDualRetrievableInUrl'
import type {CompanionEnumRetrievableInUrl}                                                                                                                                            from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'
import type {CompanionEnumWithCurrentAndSetCurrentEvent}                                                                                                                               from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByAcronym} in replacement
 */
export type CompanionEnumByAcronymSingleton<ENUM extends EnumerableWithNullableAcronym,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByAcronym<ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByAcronymOrName} in replacement
 */
export type CompanionEnumByAcronymOrNameSingleton<ENUM extends EnumerableWithEnglishNameAndNullableAcronym,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByAcronymOrName<ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByName} in replacement
 */
export type CompanionEnumByNameSingleton<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByName<ENUM, ENUM_CONSTRUCTOR>>


/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByTranslationKey} in replacement
 */
export type CompanionEnumByTranslationKeySingleton<ENUM extends EnumerableWithTranslationKey,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByTranslationKey<ENUM, ENUM_CONSTRUCTOR>>


/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByValue} in replacement
 */
export type CompanionEnumByValueSingleton<T,
    ENUM extends EnumerableWithValue<T>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByValue<T, ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByUrlValue} in replacement
 */
export type CompanionEnumByUrlValueSingleton<ENUM extends EnumerableUsedInRoute,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByUrlValue<ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByType} in replacement
 */
export type CompanionEnumByTypeSingleton<T,
    ENUM extends EnumerableWithType<T>,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByType<T, ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumByReference} in replacement
 */
export type CompanionEnumByReferenceSingleton<REFERENCE,
    ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumByReference<REFERENCE, ENUM, ENUM_CONSTRUCTOR>>


/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumWithCurrentAndSetCurrentEvent} in replacement
 */
export type CompanionEnumWithCurrentAndSetCurrentEventSingleton<ENUM extends Enumerable,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumWithCurrentAndSetCurrentEvent<ENUM, ENUM_CONSTRUCTOR>>


/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumRetrievableInUrl} in replacement
 */
export type CompanionEnumRetrievableInUrlSingleton<ENUM extends EnumerableUsedInRoute,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumRetrievableInUrl<ENUM, ENUM_CONSTRUCTOR>>

/**
 * A type-alias of the {@link import('@joookiwi/enumerable').CompanionEnumSingleton CompanionEnumSingleton},
 * but with the {@link CompanionEnumDualRetrievableInUrl} in replacement
 */
export type CompanionEnumDualRetrievableInUrlSingleton<ENUM extends EnumerableUsedInRoute,
    ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, > = Singleton<CompanionEnumDualRetrievableInUrl<ENUM, ENUM_CONSTRUCTOR>>
