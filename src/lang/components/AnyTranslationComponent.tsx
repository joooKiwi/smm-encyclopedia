import {AnyTranslationProperty}    from './TranslationProperty';
import {Namespace, useTranslation} from 'react-i18next';

export default function AnyTranslationComponent<N extends Namespace, >({namespace, translationCallback, isInSpan = false,}: AnyTranslationProperty<N>,) {
    const {t} = useTranslation(namespace);

    return isInSpan
        ? <span>{translationCallback(t)}</span>
        : <>{translationCallback(t)}</>;
}
