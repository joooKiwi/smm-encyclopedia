import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function LanguageTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'language'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="language"/>;
}
