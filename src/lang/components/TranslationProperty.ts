import type {TFunction, TypeOptions} from 'i18next'
import type {Resources}              from 'react-i18next'

export type ContentNamespace = 'content'
export type GameContentNamespace = 'gameContent'
export type EntityContentNamespace = 'entityContent'
export type LanguageNamespace = 'language'
export type Namespace = | ContentNamespace | GameContentNamespace | EntityContentNamespace | LanguageNamespace

/**
 * A translation method based on the {@link Namespace namespace} used.
 */
export type TranslationMethod<N extends Namespace, > = TFunction<N, N>

/**
 * A translation return value based on a {@link Namespace namespace}.
 *
 * @see TranslationMethod
 * @see SingleTranslationKey
 * @todo possibly add the possible values (if typescript doesn't fail)
 */
export type TranslationReturnValue<N extends Namespace, V extends string = string, > = string

/**
 * A single translation key used for a translation
 * on a specific {@link Namespace}.
 */
export type SingleTranslationKey<N extends Namespace, > = KeyOn<Resources[N]>

/** An alias of {@link SingleTranslationKey} but specified to the "language" */
export type LanguageTranslationKey = KeyOn<Resources['language']>
/** An alias of {@link SingleTranslationKey} but specified to the "content" */
export type ContentTranslationKey = KeyOn<Resources['content']>
/** An alias of {@link SingleTranslationKey} but specified to the "game content" */
export type GameContentTranslationKey = KeyOn<Resources['gameContent']>
/** An alias of {@link SingleTranslationKey} but specified to the "entity content" */
export type EntityContentTranslationKey = KeyOn<Resources['entityContent']>
/**
 * The separator of a translation key
 *
 * @see TypeOptions.keySeparator
 */
type Separator = TypeOptions['keySeparator']
/**
 * A retriever that only represent the final path of a translation (that returns a {@link String})
 *
 * @see https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
 */
type KeyOn<T extends object, > = {
    readonly [KEY in keyof T & string]: T[KEY] extends string
        ? KEY
        : T[KEY] extends object
            ? `${KEY}${Separator}${KeyOn<T[KEY]>}`
            : never
}[keyof T & string]

/**
 * A replacement map to replace the selected key
 * into a {@link ReactElementOrString possible non-null react element (string or React element)}.
 *
 * @note This has nothing with the React translation utilities.
 */
export type TranslationReplaceKeysMap<T extends ReactElementOrStringOrNumeric = ReactElementOrStringOrNumeric, > = { [key: string]: T }
