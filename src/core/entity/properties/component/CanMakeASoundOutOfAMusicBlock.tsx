import './CanMakeASoundOutOfAMusicBlock.scss'
import './PropertyWithComment.scss'

import {useRef} from 'react'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default function CanMakeASoundOutOfAMusicBlock({value,}: EntityOnlyProperties,) {
    const htmlElement = useRef<HTMLElement>(null,)
    const reference = value.reference
    if (!reference.canMakeASoundOutOfAMusicBlock)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    if (comment == null)
        return <em className="canMakeASoundOutOfAMusicBlock-property music-block-property"/>

    return <Tooltip option={{title: gameContentTranslation(`instrument.${comment}`),}} reference={htmlElement}>
        <em ref={htmlElement} className="canMakeASoundOutOfAMusicBlock-property music-block-property property-with-comment"/>
    </Tooltip>
}
