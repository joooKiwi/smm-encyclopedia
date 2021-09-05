import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function LanguageTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'language'>,) {
    const {t} = useTranslation('language');

    return isInSpan
        ? <span>{translationCallback(t)}</span>
        : <>{translationCallback(t)}</>;
}
