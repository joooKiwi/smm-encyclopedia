import './CanMakeASoundOutOfAMusicBlock.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import ContentWithInformativeTooltip from 'app/tools/text/ContentWithInformativeTooltip'
import {gameContentTranslation}      from 'lang/components/translationMethods'

export default function CanMakeASoundOutOfAMusicBlock({value,}: EntityOnlyProperties,) {
    const reference = value.reference
    if (!reference.canMakeASoundOutOfAMusicBlock)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    if (comment == null)
        return <em className="canMakeASoundOutOfAMusicBlock-property music-block-property"/>

    return <ContentWithInformativeTooltip inside tooltip={gameContentTranslation(`instrument.${comment}`)}>
        <em className="canMakeASoundOutOfAMusicBlock-property music-block-property d-block"/>
    </ContentWithInformativeTooltip>
}
