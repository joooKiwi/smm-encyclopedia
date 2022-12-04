import './YesOrNoResultTextComponent.scss'

import type {TextColor}             from 'app/tools/text/properties/BooleanResultTextProperties'
import type {YesOrNoTextProperties} from 'app/tools/text/properties/YesOrNoTextProperties'

import BooleanResultTextComponent from 'app/tools/text/BooleanResultTextComponent'
import {contentTranslation}       from 'lang/components/translationMethods'

const YES_COLOR: TextColor = 'text-yes'
const NO_COLOR: TextColor = 'text-no'

/**
 * Return a new {@link BooleanResultTextComponent} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 */
export default function YesOrNoResultTextComponent(properties: YesOrNoTextProperties,): JSX.Element {
    return <BooleanResultTextComponent
        true={[contentTranslation('Yes'), YES_COLOR,]}
        false={[contentTranslation('No'), NO_COLOR,]}
        {...properties}
    />
}
