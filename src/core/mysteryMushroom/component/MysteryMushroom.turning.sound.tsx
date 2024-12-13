import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface MysteryMushroomTurningSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomTurningSound({value,}: MysteryMushroomTurningSoundProperties,) {
    const sound = value.turningSound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <SimpleSoundComponent file={sound} title="turning-sound"/>
    </div>
}
