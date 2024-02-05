import './CanMakeASoundOutOfAMusicBlock.scss'
import './PropertyWithComment.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import Tooltip                     from 'bootstrap/tooltip/Tooltip'
import {gameContentTranslation}    from 'lang/components/translationMethods'

export default function CanMakeASoundOutOfAMusicBlock({value: entity,}: EntityOnlyProperties,) {
    const reference = entity.reference
    const value = reference.canMakeASoundOutOfAMusicBlock
    if (value !== true)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    const id = `${entity.englishNameInHtml}-canMakeASoundOutOfAMusicBlock-property`

    if (comment == null)
        return <i id={id} className="canMakeASoundOutOfAMusicBlock-property music-block-property"/>
    return <Tooltip option={{title: gameContentTranslation(`instrument.${comment}`),}} elementId={id}>
        <i id={id} className="canMakeASoundOutOfAMusicBlock-property music-block-property property-with-comment"/>
    </Tooltip>
}
