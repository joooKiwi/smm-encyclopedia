import './InstrumentSound.scss'

import type {Instruments}     from 'core/instrument/Instruments'
import type {ReactProperties} from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface InstrumentSoundProperties
    extends ReactProperties {

    readonly value: Instruments

}

/** @reactComponent */
export default function InstrumentSound({value,}: InstrumentSoundProperties,) {
    const name = value.name

    const elements = value.sounds.map((it, i,) =>
        <StandaloneSound key={`instrument sounds #${i + 1}`} file={it} title={`${name} (instrument sound #${i})`}/>,)
    if (elements.isEmpty)
        return <div className="instrumentSound-container empty-instrumentSound-container"/>
    if (elements.size === 1)
        return <div className="instrumentSound-container individual-instrumentSound-container">{elements.getFirst()}</div>
    return <div className="instrumentSound-container grouped-instrumentSound-container">{elements}</div>
}
