import type {PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function GameContentTranslationComponent(properties: PossibleTranslationPropertyReceived<'gameContent'>,) {
    return <AnyTranslationComponent namespace="gameContent" {...properties}/>;
}
