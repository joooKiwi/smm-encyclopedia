import {useTranslation} from 'react-i18next';

import type {YesOrNoTextProperties} from './properties/YesOrNoTextProperties';

import BooleanResultTextComponent from './BooleanResultTextComponent';

/**
 * Return a new {@link BooleanResultTextComponent} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 */
export default function YesOrNoResultTextComponent(properties: YesOrNoTextProperties,): JSX.Element {
    const {t: translation,} = useTranslation('content');
    return <BooleanResultTextComponent
        trueValue={translation('Yes')}
        falseValue={translation('No')}
        {...properties}
    />;
}
