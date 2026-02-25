import './IsAffectedDirectlyByAnOnOffState.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import ContentWithInformativeTooltip from 'app/tools/text/ContentWithInformativeTooltip'
import {unfinishedText}              from 'app/tools/text/UnfinishedText'
import {OtherWordInTheGames}         from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}      from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------


/** @reactComponent */
export default function IsAffectedDirectlyByAnOnOffState({value,}: EntityOnlyProperties,) {
    const reference = value.reference
    if (!reference.isAffectDirectlyByAnOnOffState)
        return null

    const comment = reference.isAffectDirectlyByAnOnOffStateComment
    if (comment == null)
        return <em className="isAffectDirectlyByAnOnOffState-property onOffBlock-image-property"/>

    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    return <ContentWithInformativeTooltip inside tooltip={gameContentTranslation(`entity.property.${comment}`, {entity: entityAsLowerCase,},)}>
        <em className="isAffectDirectlyByAnOnOffState-property onOffBlock-image-property d-block"/>
    </ContentWithInformativeTooltip>
}
