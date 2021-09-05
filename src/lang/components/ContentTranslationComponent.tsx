import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function ContentTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'content'>,) {
    const {t} = useTranslation('content');

    return isInSpan
        ? <span>{translationCallback(t)}</span>
        : <>{translationCallback(t)}</>;
}
