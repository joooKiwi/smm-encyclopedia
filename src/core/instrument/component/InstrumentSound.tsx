import './InstrumentSound.scss'

import type {Instruments}     from 'core/instrument/Instruments'
import type {ReactProperties} from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'
import {ArrayAsCollection}  from 'util/collection/ArrayAsCollection'

interface InstrumentSoundProperties
    extends ReactProperties {

    readonly value: Instruments

}

/** @reactComponent */
export default function InstrumentSound({value,}: InstrumentSoundProperties,) {
    const name = value.name
    const englishName = value.englishName

    const elements = value.sounds.map((it, i,) =>
        <SimpleSoundComponent key={`instrument sounds #${i} (${englishName})`} file={it} title={`${name} (instrument sound #${i})`}/>,)
    if (elements.isEmpty)
        return <div className="instrumentSound-container individual-instrumentSound-container">{elements}</div>
    return <div className="instrumentSound-container grouped-instrumentSound-container">{elements}</div>
}
