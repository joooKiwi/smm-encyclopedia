import type {ContentNamespace, PossibleTranslationPropertyReceived} from './TranslationProperty'

import AnyTranslationComponent from './AnyTranslationComponent'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function ContentTranslationComponent(properties: PossibleTranslationPropertyReceived<ContentNamespace>,) {
    // @ts-ignore
    return <AnyTranslationComponent namespace="content" {...properties}/>
}
