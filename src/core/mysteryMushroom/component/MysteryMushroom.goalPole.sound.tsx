import './MysteryMushroom.sound.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

interface MysteryMushroomGoalPoleSoundProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

export default function MysteryMushroomGoalPoleSound({value,}: MysteryMushroomGoalPoleSoundProperties,) {
    const sound = value.goalPoleSound
    if (sound == null)
        return null
    return <div className="mysteryMushroom-sound mysteryMushroom-single-sound">
        <SimpleSoundComponent file={sound} title="goalPole-sound"/>
    </div>
}
