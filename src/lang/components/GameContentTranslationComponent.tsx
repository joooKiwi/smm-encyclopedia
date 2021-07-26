import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function GameContentTranslationComponent({translationCallback,}: TranslationProperty<'gameContent'>,) {
    const {t} = useTranslation('gameContent');
    return <>{translationCallback(t)}</>;
}
