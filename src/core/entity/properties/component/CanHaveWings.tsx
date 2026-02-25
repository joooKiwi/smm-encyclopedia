import './CanHaveWings.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import ContentWithInformativeTooltip from 'app/tools/text/ContentWithInformativeTooltip'
import {Limits}                      from 'core/limit/Limits'
import {gameContentTranslation}      from 'lang/components/translationMethods'

/** @reactComponent */
export default function CanHaveWings({value,}: EntityOnlyProperties,) {
    const reference = value.reference
    if (!reference.canHaveWings)
        return null

    const comment = reference.canHaveWingsComment
    if (comment == null)
        return <em className="canHaveWings wing-image-property"/>

    const limit = Limits.LOOSE_COIN_LIMIT
    return <ContentWithInformativeTooltip inside tooltip={gameContentTranslation(`entity.property.${comment}`, {acronym: limit.acronym!, limit: limit.reference.languageValue,},)}>
        <em className="canHaveWings wing-image-property d-block"/>
    </ContentWithInformativeTooltip>
}
