import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import {GameStyles}   from 'core/gameStyle/GameStyles'
import GameStyleImage from 'core/gameStyle/component/GameStyleImage'
import SoundGroup     from 'util/file/sound/component/SoundGroup'

import NSMBU = GameStyles.NSMBU

interface SoundEffectSoundsInNsmbuProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInNsmbu({value,}: SoundEffectSoundsInNsmbuProperties,) {
    const sounds = value.soundsInNsmbu
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <GameStyleImage reference={NSMBU} className="mb-1"/>
        <SoundGroup value={sounds} title={it => `${englishName} (NSMBU - ${it.key})`}/>
    </div>
}
