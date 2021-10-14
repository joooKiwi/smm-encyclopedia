import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function EntityTranslationComponent(properties: | TranslationProperty<'entityContent'> | SimpleTranslationProperty<'entityContent'>,) {
    return <AnyTranslationComponent namespace="entityContent"  {...properties}/>;
}
