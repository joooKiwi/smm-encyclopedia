import i18next from 'i18next'

import type {Namespace, SingleTranslationKey, TranslationReplaceKeysMap, TranslationReturnValue} from 'lang/components/TranslationProperty'
import type {Nullable}                                                                           from 'util/types/nullable'
import type {ReactElement, ReactElementOrString}                                                 from 'util/react/ReactProperties'

import {TranslationUtility} from 'lang/components/TranslationUtility'

// @ts-ignore
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, >(namespace: N, value: V,): TranslationReturnValue<N>
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace: REPLACE,): ReactElement
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace?: REPLACE,): | TranslationReturnValue<N> | ReactElement
export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace: Nullable<REPLACE> = null,): ReactElementOrString {
    if (replace == null)
        // @ts-ignore
        return i18next.t(value, {ns: namespace,},)

    const valueFromTranslation = TranslationUtility.testTranslation(i18next.t(value, {ns: namespace, returnObjects: true, interpolation: {skipOnVariables: true,},})) as string

    return TranslationUtility.replaceInTranslation(valueFromTranslation, replace,)
}

export function languageTranslation<V extends SingleTranslationKey<'language'>, >(value: V,): TranslationReturnValue<'language'>
export function languageTranslation<V extends SingleTranslationKey<'language'>, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function languageTranslation<V extends SingleTranslationKey<'language'>, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function languageTranslation<V extends SingleTranslationKey<'language'>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'language'> | ReactElement {
    // @ts-ignore
    return translateFromAny('language', value, replace,)
}

export function contentTranslation<V extends SingleTranslationKey<'content'>, >(value: V,): TranslationReturnValue<'content'>
export function contentTranslation<V extends SingleTranslationKey<'content'>, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function contentTranslation<V extends SingleTranslationKey<'content'>, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function contentTranslation<V extends SingleTranslationKey<'content'>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'content'> | ReactElement {
    return translateFromAny('content', value, replace,)
}

export function gameContentTranslation<V extends SingleTranslationKey<'gameContent'>, >(value: V,): TranslationReturnValue<'gameContent'>
export function gameContentTranslation<V extends SingleTranslationKey<'gameContent'>, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function gameContentTranslation<V extends SingleTranslationKey<'gameContent'>, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function gameContentTranslation<V extends SingleTranslationKey<'gameContent'>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'gameContent'> | ReactElement {
    return translateFromAny('gameContent', value, replace,)
}

export function entityContentTranslation<V extends SingleTranslationKey<'entityContent'>, >(value: V,): TranslationReturnValue<'entityContent'>
export function entityContentTranslation<V extends SingleTranslationKey<'entityContent'>, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function entityContentTranslation<V extends SingleTranslationKey<'entityContent'>, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function entityContentTranslation<V extends SingleTranslationKey<'entityContent'>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'entityContent'> | ReactElement {
    return translateFromAny('entityContent', value, replace,)
}
