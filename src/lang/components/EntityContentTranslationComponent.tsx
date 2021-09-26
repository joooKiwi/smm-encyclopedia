import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function EntityTranslationComponent({translationCallback, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: TranslationProperty<'entityContent'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="entityContent"/>;
}
