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
    const size = sounds.length
    const elements = new Array<ReactJSXElement>(size,)
    let index = size
    while (index-- > 0)
        elements[index] = <SimpleSoundComponent key={`instrument sounds #${index} (${englishName})`} file={sounds[index]} title={`${name} (instrument #${index})`}/>

    return <>{elements}</>
}
