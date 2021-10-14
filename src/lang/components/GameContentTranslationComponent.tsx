import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function GameContentTranslationComponent(properties: | TranslationProperty<'gameContent'> | SimpleTranslationProperty<'gameContent'>,) {
    return <AnyTranslationComponent namespace="gameContent" {...properties}/>;
}
