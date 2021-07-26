import type {TFunction} from 'react-i18next';
import {useTranslation} from 'react-i18next';

export type GameContentCallback = (translation: TFunction<'gameContent'>,) => string;

interface GameContentProperty {

    renderCallback: GameContentCallback

}

export default function GameContentTranslationComponent({renderCallback,}: GameContentProperty,) {
    const {t} = useTranslation('gameContent');
    return <>{renderCallback(t)}</>;
}
