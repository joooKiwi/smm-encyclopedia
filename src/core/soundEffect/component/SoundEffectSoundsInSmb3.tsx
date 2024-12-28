import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import {GameStyles}   from 'core/gameStyle/GameStyles'
import GameStyleImage from 'core/gameStyle/component/GameStyleImage'
import SoundGroup     from 'util/file/sound/component/SoundGroup'

import SMB3 = GameStyles.SMB3

interface SoundEffectSoundsInSmb3Properties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInSmb3({value,}: SoundEffectSoundsInSmb3Properties,) {
    const sounds = value.soundsInSmb3
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <GameStyleImage reference={SMB3} className="mb-1"/>
        <SoundGroup value={sounds} title={it => `${englishName} (SMB3 - ${it.key})`}/>
    </div>
}
