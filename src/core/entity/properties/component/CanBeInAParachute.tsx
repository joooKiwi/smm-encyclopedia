import './CanBeInAParachute.scss'
import './PropertyWithComment.scss'

import {useRef} from 'react'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {Limits}                 from 'core/limit/Limits'
import {gameContentTranslation} from 'lang/components/translationMethods'

/** @reactComponent */
export default function CanBeInAParachute({value,}: EntityOnlyProperties,) {
    const htmlElement = useRef<HTMLElement>(null,)
    const reference = value.reference
    if (!reference.canBeInAParachute)
        return null

    const comment = reference.canBeInAParachuteComment
    if (comment == null)
        return <em className="canBeInAParachute-property parachute-image-property"/>

    const limit = Limits.LOOSE_COIN_LIMIT
    return <Tooltip option={{title: gameContentTranslation(`entity.property.${comment}`, {acronym: limit.acronym!, limit: limit.reference.languageValue,},),}} reference={htmlElement}>
        <em ref={htmlElement} className="canBeInAParachute-property parachute-image-property property-with-comment"/>
    </Tooltip>
}
