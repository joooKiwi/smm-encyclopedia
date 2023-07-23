import i18next from 'i18next'

import type {ContentTranslationKey, EntityContentTranslationKey, GameContentTranslationKey, LanguageTranslationKey, Namespace, SingleTranslationKey, TranslationReplaceKeysMap, TranslationReturnValue} from 'lang/components/TranslationProperty'

import {TranslationUtility} from 'lang/components/TranslationUtility'

function translateFromAny<N extends Namespace, V extends SingleTranslationKey<N> = SingleTranslationKey<N>, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(namespace: N, value: V, replace: Nullable<REPLACE> = null,): ReactElementOrString {
    if (replace == null)
        // @ts-ignore
        return i18next.t(value, {ns: namespace,},)

    const valueFromTranslation = TranslationUtility.testTranslation(i18next.t(value, {ns: namespace, returnObjects: true, interpolation: {skipOnVariables: true,},})) as string

    return TranslationUtility.replaceInTranslation(valueFromTranslation, replace,)
}

/**
 * Get a simple translation of a language content.
 * Those translation don't have a lot of values since they are only related to languages & regions.
 *
 * @param value The translation key
 * @canOnlyReturnAString
 */
export function languageTranslation<V extends LanguageTranslationKey, >(value: V,): TranslationReturnValue<'language'>
export function languageTranslation<V extends LanguageTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'language'> | ReactElement {
    return translateFromAny('language', value, replace,)
}


/**
 * Get a simple translation of a content.
 * Those translations are for general purpose.
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function contentTranslation<V extends ContentTranslationKey, >(value: V,): TranslationReturnValue<'content'>
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function contentTranslation<V extends ContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'content'> | ReactElement {
    return translateFromAny('content', value, replace,)
}

/**
 * Get a simple translation of a game content.
 * Those translations are related to the video game specifically.
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function gameContentTranslation<V extends GameContentTranslationKey, >(value: V,): TranslationReturnValue<'gameContent'>
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function gameContentTranslation<V extends GameContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'gameContent'> | ReactElement {
    return translateFromAny('gameContent', value, replace,)
}

/**
 * Get a simple translation of a game content.
 * Those translations are related to the Super Mario Maker games specifically
 * ({@link Games.SUPER_MARIO_MAKER_1 SMM1}, {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} & {@link Games.SUPER_MARIO_MAKER_2 SMM2}).
 *
 * @param value The translation key (that should not have any "{{}}" in them)
 */
export function entityContentTranslation<V extends EntityContentTranslationKey, >(value: V,): TranslationReturnValue<'entityContent'>
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap<string>, >(value: V, replace: REPLACE,): string
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap, >(value: V, replace: REPLACE,): ReactElement
export function entityContentTranslation<V extends EntityContentTranslationKey, REPLACE extends TranslationReplaceKeysMap = TranslationReplaceKeysMap, >(value: V, replace?: REPLACE,): | TranslationReturnValue<'entityContent'> | ReactElement {
    return translateFromAny('entityContent', value, replace,)
}
