import type {TFunction} from 'react-i18next';
import {useTranslation} from 'react-i18next';

interface LanguageProperty {

    renderCallback: (translation: TFunction<'language'>,) => string

}

export default function LanguageTranslationComponent({renderCallback,}: LanguageProperty,) {
    const {t} = useTranslation('language');
    return <>{renderCallback(t)}</>;
}
