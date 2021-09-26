import type {TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function GameContentTranslationComponent({translationCallback, isInSpan = AnyTranslationComponent.DEFAULT_IS_IN_SPAN,}: TranslationProperty<'gameContent'>,) {
    return <AnyTranslationComponent translationCallback={translationCallback} isInSpan={isInSpan} namespace="gameContent"/>;
}
