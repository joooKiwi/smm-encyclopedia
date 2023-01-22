import i18next from 'i18next'

import type {ContentTranslationKey, EntityContentTranslationKey, GameContentTranslationKey, LanguageTranslationKey, Namespace, SingleTranslationKey, TranslationReplaceKeysMap, TranslationReturnValue} from 'lang/components/TranslationProperty'
import type {Nullable}                                                                                                                                                                                  from 'util/types/nullable'
import type {ReactElement, ReactElementOrString}                                                                                                                                                        from 'util/react/ReactProperties'

import {TranslationUtility} from 'lang/components/TranslationUtility'

export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, >(namespace: N, value: V,): TranslationReturnValue<N>
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace: REPLACE,): ReactElement
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace?: REPLACE,): | TranslationReturnValue<N> | ReactElement
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace: Nullable<REPLACE> = null,): ReactElementOrString {
    if (replace == null)
        // @ts-ignore
        return i18next.t(value, {ns: namespace,},) as unknown as ReactElementOrString

    const valueFromTranslation = TranslationUtility.testTranslation(i18next.t(value, {ns: namespace, returnObjects: true, interpolation: {skipOnVariables: true,},})) as string

    return TranslationUtility.replaceInTranslation(valueFromTranslation, replace,)
}

export function languageTranslation<V extends LanguageTranslationKey, >(value: V,): TranslationReturnValue<'language'>
export function languageTranslation<V extends LanguageTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function languageTranslation<V extends LanguageTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function languageTranslation<V extends LanguageTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'language'> | ReactElement {
    return translateFromAny('language', value, replace,)
}

export function contentTranslation<V extends ContentTranslationKey, >(value: V,): TranslationReturnValue<'content'>
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'content'> | ReactElement {
    return translateFromAny('content', value, replace,)
}

export function gameContentTranslation<V extends GameContentTranslationKey, >(value: V,): TranslationReturnValue<'gameContent'>
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'gameContent'> | ReactElement {
    return translateFromAny('gameContent', value, replace,)
}

export function entityContentTranslation<V extends EntityContentTranslationKey, >(value: V,): TranslationReturnValue<'entityContent'>
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'entityContent'> | ReactElement {
    return translateFromAny('entityContent', value, replace,)
}
