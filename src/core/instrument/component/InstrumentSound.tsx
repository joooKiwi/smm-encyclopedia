import {forEachByArray} from '@joookiwi/collection'

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
    const elements = new Array<ReactJSXElement>(sounds.length,)
    forEachByArray(sounds, (it, i,) =>
            elements[i] = <SimpleSoundComponent key={`instrument sounds #${i} (${englishName})`} file={it} title={`${name} (instrument #${i})`}/>,)
    return <>{elements}</>
}
