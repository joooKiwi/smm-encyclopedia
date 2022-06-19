import type {LanguageNamespace, PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LanguageTranslationComponent(properties: PossibleTranslationPropertyReceived<LanguageNamespace>,) {
    // @ts-ignore
    return <AnyTranslationComponent namespace="language" {...properties}/>;
}
