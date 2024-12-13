import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface MysteryMushroomOnGroundAfterAJumpSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomOnGroundAfterAJumpSound({value,}: MysteryMushroomOnGroundAfterAJumpSoundProperties,) {
    const sound = value.onGroundAfterJumpASound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <SimpleSoundComponent file={sound} title="onGroundAfterAJump-sound"/>
    </div>
}
