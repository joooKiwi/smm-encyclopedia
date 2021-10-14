import type {PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function ContentTranslationComponent(properties: PossibleTranslationPropertyReceived<'content'>,) {
    return <AnyTranslationComponent namespace="content" {...properties}/>;
}
