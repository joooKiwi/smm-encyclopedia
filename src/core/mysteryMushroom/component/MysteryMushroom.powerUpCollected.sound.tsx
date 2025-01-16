import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface MysteryMushroomPowerUpCollectedSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomPowerUpCollectedSound({value,}: MysteryMushroomPowerUpCollectedSoundProperties,) {
    const sound = value.powerUpCollectedSound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <StandaloneSound file={sound} title="powerUpCollected-sound"/>
    </div>
}
