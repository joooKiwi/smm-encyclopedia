import {useTranslation}       from 'react-i18next';
import BooleanResultContainer from './BooleanResultContainer';

export interface YesOrNoTextContent {
    boolean: boolean
}

/**
 * Return a new {@link BooleanResultContainer} with a value based on the translation "Yes" or "No".
 *
 * @param props {@link YesOrNoTextContent} a simple boolean value property
 * @return {@link BooleanResultContainer}
 */
export function YesOrNoResultContainer(props: YesOrNoTextContent) {
    const {t} = useTranslation('content');
    return <BooleanResultContainer boolean={props.boolean} trueValue={t('Yes')} falseValue={t('No')}/>;
}