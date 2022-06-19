import type {EntityContentNamespace, PossibleTranslationPropertyReceived} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function EntityTranslationComponent(properties: PossibleTranslationPropertyReceived<EntityContentNamespace>,) {
    // @ts-ignore
    return <AnyTranslationComponent namespace="entityContent"  {...properties}/>;
}
