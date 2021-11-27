import './YesOrNoResultTextComponent.scss';

import {useTranslation} from 'react-i18next';

import type {TextColor}             from './properties/BooleanResultTextProperties';
import type {YesOrNoTextProperties} from './properties/YesOrNoTextProperties';

import BooleanResultTextComponent from './BooleanResultTextComponent';

const YES_COLOR: TextColor = 'text-yes';
const NO_COLOR: TextColor = 'text-no';

/**
 * Return a new {@link BooleanResultTextComponent} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 */
export default function YesOrNoResultTextComponent(properties: YesOrNoTextProperties,): JSX.Element {
    const {t: translation,} = useTranslation('content');

    return <BooleanResultTextComponent
        true={[translation('Yes'), YES_COLOR,]}
        false={[translation('No'), NO_COLOR,]}
        {...properties}
    />;
}
