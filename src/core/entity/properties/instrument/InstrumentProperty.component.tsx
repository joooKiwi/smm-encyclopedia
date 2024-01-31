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
export default function InstrumentPropertyComponent(properties: InstrumentPropertyProperties,) {
    const entity = properties.value
    const reference = entity.reference
    const value = reference.canMakeASoundOutOfAMusicBlock
    if (value !== true)
        return null

    const comment = reference.canMakeASoundOutOfAMusicBlockComment
    const id = `${entity.englishNameInHtml}-instrumentProperty`

    if (comment == null)
        return <i id={id} className="instrumentProperty music-block"/>
    return <Tooltip option={{title: gameContentTranslation(`instrument.${comment}`),}} elementId={id}>
        <i id={id} className="instrumentProperty music-block music-block-with-comment"/>
    </Tooltip>
}
