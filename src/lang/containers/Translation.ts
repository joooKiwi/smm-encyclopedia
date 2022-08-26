import type {Namespace, SingleTranslationKey, TranslationReplaceKeysMap} from '../components/TranslationProperty';
import type {ReactElementOrString}                                       from '../../util/react/ReactProperties';

export interface Translation<N extends Namespace = Namespace, T extends ReactElementOrString = ReactElementOrString, > {

    get namespace(): N

    get translationKey(): SingleTranslationKey<N>

    get replace(): TranslationReplaceKeysMap<T>

}
