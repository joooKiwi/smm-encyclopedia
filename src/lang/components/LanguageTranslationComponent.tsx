import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LanguageTranslationComponent(properties: | TranslationProperty<'language'> | SimpleTranslationProperty<'language'>,) {
    return <AnyTranslationComponent namespace="language" {...properties}/>;
}
