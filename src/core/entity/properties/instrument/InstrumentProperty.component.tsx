import './InstrumentProperty.scss'

import type {Entities}        from 'core/entity/Entities'
import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip                  from 'bootstrap/tooltip/Tooltip'
import {gameContentTranslation} from 'lang/components/translationMethods'

interface InstrumentPropertyProperties
    extends ReactProperties {

    readonly value: Entities

}

/**
 * @todo add on click event to play the music block sound (randomly if more than one)
 * @reactComponent
 */
export default function InstrumentPropertyComponent({value: {englishNameInHtml, reference: {canMakeASoundOutOfAMusicBlock: value, canMakeASoundOutOfAMusicBlockComment: comment,},},}: InstrumentPropertyProperties,) {
    if (value !== true)
        return null
    const id = `${englishNameInHtml}-instrumentProperty`

    if (comment == null)
        return <i id={id} className="music-block"/>
    return <Tooltip option={{title: gameContentTranslation(`instrument.${comment}`),}} elementId={id}>
        <i id={id} className="music-block-with-comment"/>
    </Tooltip>
}
