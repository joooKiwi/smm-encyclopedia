import BooleanResultContainer from './BooleanResultContainer';
import {useTranslation}       from 'react-i18next';

export interface YesOrNoTextContent {

    boolean: boolean

}

/**
 * Return a new {@link BooleanResultContainer} with a value based on the translation "Yes" or "No".
 *
 * @param props {@link YesOrNoTextContent} a simple boolean value property
 * @return {@link BooleanResultContainer}
 */
export default function YesOrNoResultContainer({boolean,}: YesOrNoTextContent,): JSX.Element {
    const {t: translation,} = useTranslation('content');
    return <BooleanResultContainer
        boolean={boolean}
        trueValue={translation('Yes')}
        falseValue={translation('No')}
    />;
}