import type {PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LanguageTranslationComponent(properties: PossibleTranslationPropertyReceived<'language'>,) {
    return <AnyTranslationComponent namespace="language" {...properties}/>;
}
