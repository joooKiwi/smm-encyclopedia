import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function GameContentTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'gameContent'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="gameContent"/>;
}
