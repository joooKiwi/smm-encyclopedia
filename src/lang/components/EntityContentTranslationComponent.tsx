import type {PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function EntityTranslationComponent(properties: PossibleTranslationPropertyReceived<'entityContent'>,) {
    return <AnyTranslationComponent namespace="entityContent"  {...properties}/>;
}
