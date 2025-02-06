import './IsAffectedDirectlyByAnOnOffState.scss'
import './PropertyWithComment.scss'

import {useRef} from 'react'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------


/** @reactComponent */
export default function IsAffectedDirectlyByAnOnOffState({value,}: EntityOnlyProperties,) {
    const htmlElement = useRef<HTMLElement>(null,)
    const reference = value.reference
    if (!reference.isAffectDirectlyByAnOnOffState)
        return null

    const comment = reference.isAffectDirectlyByAnOnOffStateComment
    if (comment == null)
        return <em className="isAffectDirectlyByAnOnOffState-property onOffBlock-image-property"/>

    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    return <Tooltip option={{title: gameContentTranslation(`entity.property.${comment}`, {entity: entityAsLowerCase,},),}} reference={htmlElement}>
        <em ref={htmlElement} className="isAffectDirectlyByAnOnOffState-property onOffBlock-image-property property-with-comment"/>
    </Tooltip>
}
