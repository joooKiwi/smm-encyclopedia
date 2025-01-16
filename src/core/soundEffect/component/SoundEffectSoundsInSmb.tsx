import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import {GameStyles}   from 'core/gameStyle/GameStyles'
import GameStyleImage from 'core/gameStyle/component/GameStyleImage'
import SoundGroup     from 'util/file/sound/component/SoundGroup'

import SMB = GameStyles.SMB

interface SoundEffectSoundsInSmbProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInSmb({value,}: SoundEffectSoundsInSmbProperties,) {
    const sounds = value.soundsInSmb
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <GameStyleImage reference={SMB} className="mb-1"/>
        <SoundGroup value={sounds} title={it => `${englishName} (SMB - ${it.key})`}/>
    </div>
}
