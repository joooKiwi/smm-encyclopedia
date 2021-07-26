import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function ContentTranslationComponent({translationCallback,}: TranslationProperty<'content'>,) {
    const {t} = useTranslation('content');
    return <>{translationCallback(t)}</>;
}
