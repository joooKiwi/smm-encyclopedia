import type {DefaultResources, KeyPrefix, TFuncKey, TFuncReturn, TFunction} from 'react-i18next';

import type {ReactElement, SimpleReactPropertyWithChildren} from '../../util/react/ReactProperty';

export type TranslationReturnType = | string | JSX.Element;
export type ContentCallback = AnyTranslationCallback<ContentNamespace>;
export type GameContentCallback = AnyTranslationCallback<GameContentNamespace>;
export type EntityContentCallback = AnyTranslationCallback<EntityContentNamespace>;
export type LanguageCallback = AnyTranslationCallback<LanguageNamespace>;
export type AnyTranslationCallback<N extends Namespace, > = (translation: TranslationMethod<N>,) => TranslationReturnType;

export type ContentNamespace = 'content';
export type GameContentNamespace = 'gameContent';
export type EntityContentNamespace = 'entityContent';
export type LanguageNamespace = 'language';
export type Namespace = keyof DefaultResources;

/**
 * A simple translation method based on the {@link Namespace namespace} used.
 */
export type TranslationMethod<N extends Namespace, > = TFunction<N>;

/**
 * A simple translation return value based on a {@link Namespace namespace}.
 *
 * @see TranslationMethod
 * @see SingleTranslationKey
 */
export type TranslationReturnValue<N extends Namespace, > = TFuncReturn<N, SingleTranslationKey<N>, string, KeyPrefix<N>, DefaultResources[N]>;

/**
 * A single translation key used for a translation
 * on a specific {@link Namespace}.
 */
export type SingleTranslationKey<N extends Namespace, > = TFuncKey<N> extends infer S ? S : never;

/**
 * A replacement map to replace the selected key
 * into a {@link PossibleReactElement possible react element (string or React element)}.
 *
 * @note This has nothing with the React translation utilities.
 */
export type TranslationReplaceKeysMap<T extends PossibleReactElement = PossibleReactElement, > = { [key: string]: T };
/**
 * A {@link ReactElement React element} or a simple {@link String string}
 */
export type PossibleReactElement = | ReactElement | string;

interface _AnyTranslationProperty<N extends Namespace, > {

    namespace: N

    replace?: TranslationReplaceKeysMap

}

export interface TranslationProperty<N extends Namespace, >
    extends SimpleReactPropertyWithChildren<AnyTranslationCallback<N>> {

}

export interface AnyTranslationProperty<N extends Namespace, >
    extends TranslationProperty<N>, _AnyTranslationProperty<N> {

}


export interface SimpleTranslationProperty<N extends Namespace, > {

    translationKey: SingleTranslationKey<N>

    replace?: TranslationReplaceKeysMap

}

export interface SimpleAnyTranslationProperty<N extends Namespace, >
    extends SimpleTranslationProperty<N>, _AnyTranslationProperty<N> {

}


export type PossibleAnyTranslationPropertyReceived<N extends Namespace, > = | AnyTranslationProperty<N> | SimpleAnyTranslationProperty<N>;
export type PossibleTranslationPropertyReceived<N extends Namespace, > = | TranslationProperty<N> | SimpleTranslationProperty<N>;
