import './CanHaveWings.scss'
import './PropertyWithComment.scss'

import {useRef} from 'react'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {Limits}                 from 'core/limit/Limits'
import {gameContentTranslation} from 'lang/components/translationMethods'

/** @reactComponent */
export default function CanHaveWings({value: entity,}: EntityOnlyProperties,) {
    const htmlElement = useRef<HTMLElement>(null,)
    const reference = entity.reference
    const value = reference.canHaveWings
    if (value !== true)
        return null

    const comment = reference.canHaveWingsComment
    if (comment == null)
        return <em className="canHaveWings wing-image-property"/>

    const limit = Limits.LOOSE_COIN_LIMIT
    return <Tooltip option={{title: gameContentTranslation(`entity.property.${comment}`, {acronym: limit.acronym!, limit: limit.reference.languageValue,},),}} reference={htmlElement}>
        <em ref={htmlElement} className="canHaveWings wing-image-property property-with-comment"/>
    </Tooltip>
}
