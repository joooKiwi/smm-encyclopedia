import type {Namespace, PossibleReactElement, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';

export interface Translation<N extends Namespace = Namespace, T extends PossibleReactElement = PossibleReactElement, > {

    get namespace(): N

    get translationKey(): SingleTranslationKey<N>

    get replace(): TranslationReplaceKeysMap<T>

}
