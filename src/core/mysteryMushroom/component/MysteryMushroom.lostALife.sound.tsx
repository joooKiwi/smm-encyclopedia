import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import StandaloneSound from 'util/file/sound/component/StandaloneSound'

interface MysteryMushroomLostALifeSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomLostALifeSound({value,}: MysteryMushroomLostALifeSoundProperties,) {
    const sound = value.lostALifeSound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <StandaloneSound file={sound} title="lostALife-sound"/>
    </div>
}
