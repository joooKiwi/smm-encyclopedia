import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function EntityTranslationComponent({translationCallback, isInSpan}: TranslationProperty<'entityContent'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="entityContent"/>;
}
