import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function ContentTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'content'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="content"/>;
}
