import i18next from 'i18next'

import type {Namespace, SingleTranslationKey, TranslationReturnValue} from './TranslationProperty'

export function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, >(namespace: N, value: V,): TranslationReturnValue<N> {
    // @ts-ignore
    return i18next.t(value, {ns: namespace,},)
    //TODO replace the interpretation from AnyTranslationComponent over here
}

export function languageTranslation<V extends SingleTranslationKey<'language'>, >(value: V,): TranslationReturnValue<'language'> {
    return translateFromAny('language', value,)
}

export function contentTranslation<V extends SingleTranslationKey<'content'>, >(value: V,): TranslationReturnValue<'content'> {
    return translateFromAny('content', value,)
}

export function gameContentTranslation<V extends SingleTranslationKey<'gameContent'>, >(value: V,): TranslationReturnValue<'gameContent'> {
    return translateFromAny('gameContent', value,)
}

export function entityContentTranslation<V extends SingleTranslationKey<'entityContent'>, >(value: V,): TranslationReturnValue<'entityContent'> {
    return translateFromAny('entityContent', value,)
}
