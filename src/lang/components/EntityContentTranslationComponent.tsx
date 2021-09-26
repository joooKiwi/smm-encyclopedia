import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function EntityTranslationComponent({children, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: TranslationProperty<'entityContent'>,) {
    return <AnyTranslationComponent isInSpan={isInSpan} namespace="entityContent">{children}</AnyTranslationComponent>;
}
