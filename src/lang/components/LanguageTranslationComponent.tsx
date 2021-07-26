import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function LanguageTranslationComponent({translationCallback,}: TranslationProperty<'language'>,) {
    const {t} = useTranslation('language');
    return <>{translationCallback(t)}</>;
}
