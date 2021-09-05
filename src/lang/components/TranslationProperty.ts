import {Namespace, TFunction} from 'react-i18next';

export type ContentCallback = (translation: TFunction<'content'>,) => string;
export type GameContentCallback = (translation: TFunction<'gameContent'>,) => string;
export type EntityContentCallback = (translation: TFunction<'entityContent'>,) => string;
export type LanguageCallback = (translation: TFunction<'language'>,) => string;

export interface TranslationProperty<N extends Namespace, > {

    translationCallback: (translation: TFunction<N>,) => string

    isInSpan?: boolean

}

export interface AnyTranslationProperty<N extends Namespace, >
    extends TranslationProperty<N> {

    namespace: N

}
