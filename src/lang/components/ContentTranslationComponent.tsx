import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function ContentTranslationComponent(properties: | TranslationProperty<'content'> | SimpleTranslationProperty<'content'>,) {
    return <AnyTranslationComponent namespace="content" {...properties}/>;
}
