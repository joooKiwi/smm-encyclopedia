import type {GameContentNamespace, PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function GameContentTranslationComponent(properties: PossibleTranslationPropertyReceived<GameContentNamespace>,) {
    // @ts-ignore
    return <AnyTranslationComponent namespace="gameContent" {...properties}/>;
}
