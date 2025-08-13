import type {Nullable, StringOrNumeric} from '@joookiwi/type'
import i18next                          from 'i18next'

import type {ContentTranslationKey, EntityContentTranslationKey, GameContentTranslationKey, LanguageTranslationKey, Namespace, SingleTranslationKey, TranslationReplaceKeysMap, TranslationReturnValue} from 'lang/components/TranslationProperty'

import {TranslationUtility} from 'lang/components/TranslationUtility'

import replaceInTranslation = TranslationUtility.replaceInTranslation
import testTranslation =      TranslationUtility.testTranslation

function translateFromAny<const N extends Namespace, const V extends SingleTranslationKey<N> = SingleTranslationKey<N>, >(namespace: N, value: V, replace?: Nullable<TranslationReplaceKeysMap>,): ReactElementOrString
function translateFromAny<const N extends Namespace, >(namespace: N, value: SingleTranslationKey<N>, replace: Nullable<TranslationReplaceKeysMap> = null,): ReactElementOrString {
    if (replace == null)
        return i18next.t(value, {ns: namespace,},)

    const valueFromTranslation = testTranslation(i18next.t(value, {ns: namespace, returnObjects: true, interpolation: {skipOnVariables: true,},})) as string

    return replaceInTranslation(valueFromTranslation, replace,)
}

/**
 * Get a translation of a language content.
 * Those translation don't have a lot of values since they are only related to languages & regions.
 *
 * @param value The translation key
 * @canOnlyReturnAString
 */
export function languageTranslation<const V extends LanguageTranslationKey, >(value: V,): TranslationReturnValue<'language', V>
export function languageTranslation<const V extends LanguageTranslationKey, >(value: V,) {
    return translateFromAny('language', value,)
}


/**
 * Get a translation of a content.
 * Those translations are for general purpose.
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function contentTranslation<const V extends ContentTranslationKey, >(value: V,): TranslationReturnValue<'content', V>
export function contentTranslation<const V extends ContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap<StringOrNumeric>,): string
export function contentTranslation<const V extends ContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap,): ReactElement
export function contentTranslation<const V extends ContentTranslationKey, >(value: V, replace?: TranslationReplaceKeysMap,) {
    return translateFromAny('content', value, replace,)
}

/**
 * Get a translation of a game content.
 * Those translations are related to the video game specifically.
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function gameContentTranslation<const V extends GameContentTranslationKey, >(value: V,): TranslationReturnValue<'gameContent', V>
export function gameContentTranslation<const V extends GameContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap<StringOrNumeric>,): string
export function gameContentTranslation<const V extends GameContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap,): ReactElement
export function gameContentTranslation<const V extends GameContentTranslationKey, >(value: V, replace?: TranslationReplaceKeysMap,) {
    return translateFromAny('gameContent', value, replace,)
}

/**
 * Get a translation of a game content.
 * Those translations are related to the Super Mario Maker games specifically
 * ({@link SMM1}, {@link SMM3DS} & {@link SMM2}).
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function entityContentTranslation<const V extends EntityContentTranslationKey, >(value: V,): TranslationReturnValue<'entityContent', V>
export function entityContentTranslation<const V extends EntityContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap<StringOrNumeric>,): string
export function entityContentTranslation<const V extends EntityContentTranslationKey, >(value: V, replace: TranslationReplaceKeysMap,): ReactElement
export function entityContentTranslation<const V extends EntityContentTranslationKey, >(value: V, replace?: TranslationReplaceKeysMap,) {
    return translateFromAny('entityContent', value, replace,)
}
