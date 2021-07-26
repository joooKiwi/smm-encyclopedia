import {Namespace, TFunction} from 'react-i18next';

export type ContentCallback = (translation: TFunction<'content'>,) => string;
export type GameContentCallback = (translation: TFunction<'gameContent'>,) => string;
export type LanguageCallback = (translation: TFunction<'language'>,) => string;

export interface TranslationProperty<T extends Namespace> {

    translationCallback: (translation: TFunction<T>,) => string

}