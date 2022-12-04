import type {TFuncKey, TFuncReturn, TFunction} from 'i18next'

import type {ReactElementOrString} from 'util/react/ReactProperties'

export type ContentNamespace = 'content'
export type GameContentNamespace = 'gameContent'
export type EntityContentNamespace = 'entityContent'
export type LanguageNamespace = 'language'
export type Namespace = | ContentNamespace | GameContentNamespace | EntityContentNamespace | LanguageNamespace

/**
 * A simple translation method based on the {@link Namespace namespace} used.
 */
export type TranslationMethod<N extends Namespace, > = TFunction<N, N>

/**
 * A simple translation return value based on a {@link Namespace namespace}.
 *
 * @see TranslationMethod
 * @see SingleTranslationKey
 */
export type TranslationReturnValue<N extends Namespace, V extends string = string, > = TFuncReturn<N, SingleTranslationKey<N, V>, string, undefined, N>

/**
 * A single translation key used for a translation
 * on a specific {@link Namespace}.
 */
export type SingleTranslationKey<N extends Namespace, V extends string = string, > = TFuncKey<N, V>

/**
 * A replacement map to replace the selected key
 * into a {@link ReactElementOrString possible non-null react element (string or React element)}.
 *
 * @note This has nothing with the React translation utilities.
 */
export type TranslationReplaceKeysMap<T extends ReactElementOrString = ReactElementOrString, > = { [key: string]: T }
