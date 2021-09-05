import {useTranslation} from 'react-i18next';

import type {TranslationProperty} from './TranslationProperty';

export default function GameContentTranslationComponent({translationCallback, isInSpan = false,}: TranslationProperty<'gameContent'>,) {
    const {t} = useTranslation('gameContent');

    return isInSpan
        ? <span>{translationCallback(t)}</span>
        : <>{translationCallback(t)}</>;
}
