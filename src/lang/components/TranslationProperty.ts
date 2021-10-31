import type {Namespace, TFuncKey, TFunction} from 'react-i18next';

import type {SimpleReactPropertyWithChildren} from '../../util/react/ReactProperty';

export type TranslationReturnType = | string | JSX.Element;
export type ContentCallback = (translation: TFunction<'content'>,) => TranslationReturnType;
export type GameContentCallback = (translation: TFunction<'gameContent'>,) => TranslationReturnType;
export type EntityContentCallback = (translation: TFunction<'entityContent'>,) => TranslationReturnType;
export type LanguageCallback = (translation: TFunction<'language'>,) => TranslationReturnType;


export type SingleTranslationKey<N extends Namespace, > = TFuncKey<N> extends infer S ? S : never;

interface _AnyTranslationProperty<N extends Namespace, > {

    namespace: N
}

export interface TranslationProperty<N extends Namespace, >
    extends SimpleReactPropertyWithChildren<(translation: TFunction<N>,) => TranslationReturnType> {

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
