import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface MysteryMushroomTauntSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomTauntSound({value,}: MysteryMushroomTauntSoundProperties,) {
    const sound = value.tauntSound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <SimpleSoundComponent file={sound} title="taunt-sound"/>
    </div>
}
