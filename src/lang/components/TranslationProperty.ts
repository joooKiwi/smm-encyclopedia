import type {Namespace, TFunction} from 'react-i18next';

import type {SimpleReactPropertyWithChildren} from '../../util/ReactProperty';

export type TranslationReturnType = | string | JSX.Element;
export type ContentCallback = (translation: TFunction<'content'>,) => TranslationReturnType;
export type GameContentCallback = (translation: TFunction<'gameContent'>,) => TranslationReturnType;
export type EntityContentCallback = (translation: TFunction<'entityContent'>,) => TranslationReturnType;
export type LanguageCallback = (translation: TFunction<'language'>,) => TranslationReturnType;

export interface TranslationProperty<N extends Namespace, >
    extends SimpleReactPropertyWithChildren<(translation: TFunction<N>,) => TranslationReturnType> {

    isInSpan?: boolean;

}

export interface AnyTranslationProperty<N extends Namespace, >
    extends TranslationProperty<N> {

    namespace: N;

}
