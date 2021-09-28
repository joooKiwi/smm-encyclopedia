import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function GameContentTranslationComponent(props: | TranslationProperty<'gameContent'> | SimpleTranslationProperty<'gameContent'>,) {
    return <AnyTranslationComponent namespace="gameContent" {...props}/>;
}
