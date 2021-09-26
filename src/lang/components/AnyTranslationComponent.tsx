import {AnyTranslationProperty}    from './TranslationProperty';
import {Namespace, useTranslation} from 'react-i18next';

function AnyTranslationComponent<N extends Namespace, >({namespace, children, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: AnyTranslationProperty<N>,) {
    const {t: translation,} = useTranslation(namespace);

    return isInSpan
        ? <span>{children(translation)}</span>
        : <>{children(translation)}</>;
}

namespace AnyTranslationComponent {

    export const DEFAULT_IS_IN_SPAN = false;
}

export default AnyTranslationComponent;
