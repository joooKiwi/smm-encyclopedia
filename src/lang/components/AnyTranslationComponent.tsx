import {AnyTranslationProperty}    from './TranslationProperty';
import {Namespace, useTranslation} from 'react-i18next';

function AnyTranslationComponent<N extends Namespace, >({namespace, translationCallback, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: AnyTranslationProperty<N>,) {
    const {t: translation,} = useTranslation(namespace);

    return isInSpan
        ? <span>{translationCallback(translation)}</span>
        : <>{translationCallback(translation)}</>;
}

namespace AnyTranslationComponent {

    export const DEFAULT_IS_IN_SPAN = false;
}

export default AnyTranslationComponent;
