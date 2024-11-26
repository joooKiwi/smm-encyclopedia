import './InstrumentSound.scss'

import {mapByArray} from '@joookiwi/collection'

import type {Instruments}     from 'core/instrument/Instruments'
import type {ReactProperties} from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface InstrumentSoundProperties
    extends ReactProperties {

    readonly value: Instruments

}

export default function InstrumentSound({value,}: InstrumentSoundProperties,) {
    const name = value.name
    const englishName = value.englishName

    const sounds = value.sounds
    const elements = mapByArray(sounds, (it, i,) =>
        <SimpleSoundComponent key={`instrument sounds #${i} (${englishName})`} file={it} title={`${name} (instrument #${i})`}/>,)
    if (elements.isEmpty)
        return <div className="instrumentSound-container individual-instrumentSound-container">{elements}</div>
    return <div className="instrumentSound-container grouped-instrumentSound-container">{elements}</div>
}
