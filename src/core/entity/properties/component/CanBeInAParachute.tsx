import './CanBeInAParachute.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import ContentWithInformativeTooltip from 'app/tools/text/ContentWithInformativeTooltip'
import {Limits}                      from 'core/limit/Limits'
import {gameContentTranslation}      from 'lang/components/translationMethods'

/** @reactComponent */
export default function CanBeInAParachute({value,}: EntityOnlyProperties,) {
    const reference = value.reference
    if (!reference.canBeInAParachute)
        return null

    const comment = reference.canBeInAParachuteComment
    if (comment == null)
        return <em className="canBeInAParachute-property parachute-image-property"/>

    const limit = Limits.LOOSE_COIN_LIMIT
    return <ContentWithInformativeTooltip inside tooltip={gameContentTranslation(`entity.property.${comment}`, {acronym: limit.acronym!, limit: limit.reference.languageValue,},)}>
        <em className="canBeInAParachute-property parachute-image-property d-block"/>
    </ContentWithInformativeTooltip>
}
