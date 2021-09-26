import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function LanguageTranslationComponent({children, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: TranslationProperty<'language'>,) {
    return <AnyTranslationComponent isInSpan={isInSpan} namespace="language">{children}</AnyTranslationComponent>;
}
