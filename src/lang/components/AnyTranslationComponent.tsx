import {AnyTranslationProperty}    from './TranslationProperty';
import {Namespace, useTranslation} from 'react-i18next';

function AnyTranslationComponent<N extends Namespace, >({namespace, translationCallback, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: AnyTranslationProperty<N>,) {
    const {t} = useTranslation(namespace);

    return isInSpan
        ? <span>{translationCallback(t)}</span>
        : <>{translationCallback(t)}</>;
}

namespace AnyTranslationComponent {

    export const DEFAULT_IS_IN_SPAN = false;
}

export default AnyTranslationComponent;
