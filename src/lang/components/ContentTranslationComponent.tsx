import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function ContentTranslationComponent({children, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: TranslationProperty<'content'>,) {
    return <AnyTranslationComponent isInSpan={isInSpan} namespace="content">{children}</AnyTranslationComponent>;
}
