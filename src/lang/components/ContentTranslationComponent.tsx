import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function ContentTranslationComponent(props: |TranslationProperty<'content'> | SimpleTranslationProperty<'content'>,) {
    return <AnyTranslationComponent namespace="content" {...props}/>;
}
