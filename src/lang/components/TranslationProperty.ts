import type {DefaultResources, Namespace as OriginalNamespace, TFuncKey, TFuncReturn, TFunction} from 'react-i18next';

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
export type Namespace = OriginalNamespace;

export type TranslationMethod<N extends Namespace, > = TFunction<N>;

export type TranslationReturnMethod<N extends Namespace, KEY, DEFAULT_RESULT, RESOURCE = DefaultResources, > = TFuncReturn<N, KEY, DEFAULT_RESULT, RESOURCE>;

export type SingleTranslationKey<N extends Namespace, > = TFuncKey<N> extends infer S ? S : never;
export type TranslationReplaceKeysMap = { [key: string]: ReactElement };

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

}

export interface SimpleAnyTranslationProperty<N extends Namespace, >
    extends SimpleTranslationProperty<N>, _AnyTranslationProperty<N> {

}


export type PossibleAnyTranslationPropertyReceived<N extends Namespace, > = | AnyTranslationProperty<N> | SimpleAnyTranslationProperty<N>;
export type PossibleTranslationPropertyReceived<N extends Namespace, > = | TranslationProperty<N> | SimpleTranslationProperty<N>;
