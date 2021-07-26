import type {TFunction} from 'react-i18next';
import {useTranslation} from 'react-i18next';

type ContentCallback = (translation: TFunction<'content'>,) => string;

interface ContentProperty {

    renderCallback: ContentCallback

}

export default function ContentTranslationComponent({renderCallback,}: ContentProperty,) {
    const {t} = useTranslation('content');
    return <>{renderCallback(t)}</>;
}
