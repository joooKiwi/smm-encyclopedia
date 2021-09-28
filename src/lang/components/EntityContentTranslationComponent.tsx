import type {SimpleTranslationProperty, TranslationProperty} from './TranslationProperty';

import AnyTranslationComponent from './AnyTranslationComponent';

export default function EntityTranslationComponent(props: | TranslationProperty<'entityContent'> | SimpleTranslationProperty<'entityContent'>,) {
    return <AnyTranslationComponent namespace="entityContent"  {...props}/>;
}
