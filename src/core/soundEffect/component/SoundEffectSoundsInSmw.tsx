import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import {GameStyles}   from 'core/gameStyle/GameStyles'
import GameStyleImage from 'core/gameStyle/component/GameStyleImage'
import SoundGroup     from 'util/file/sound/component/SoundGroup'

import SMW = GameStyles.SMW

interface SoundEffectSoundsInSmwProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInSmw({value,}: SoundEffectSoundsInSmwProperties,) {
    const sounds = value.soundsInSmw
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <GameStyleImage reference={SMW} className="mb-1"/>
        <SoundGroup value={sounds} title={it => `${englishName} (SMW - ${it.key})`}/>
    </div>
}
