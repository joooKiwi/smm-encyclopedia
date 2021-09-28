import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function LanguageTranslationComponent(props: | TranslationProperty<'language'> | SimpleTranslationProperty<'language'>,) {
    return <AnyTranslationComponent namespace="language" {...props}/>;
}
