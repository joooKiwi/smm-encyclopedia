import './YesOrNoResultTextComponent.scss';

import type {TextColor}             from './properties/BooleanResultTextProperties';
import type {YesOrNoTextProperties} from './properties/YesOrNoTextProperties';

import BooleanResultTextComponent  from './BooleanResultTextComponent';
import ContentTranslationComponent from '../../../lang/components/ContentTranslationComponent';

const YES_COLOR: TextColor = 'text-yes';
const NO_COLOR: TextColor = 'text-no';

/**
 * Return a new {@link BooleanResultTextComponent} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 */
export default function YesOrNoResultTextComponent(properties: YesOrNoTextProperties,): JSX.Element {
    return <ContentTranslationComponent>{translation =>
        <BooleanResultTextComponent
            true={[translation('Yes'), YES_COLOR,]}
            false={[translation('No'), NO_COLOR,]}
            {...properties}
        />}</ContentTranslationComponent>;
}
