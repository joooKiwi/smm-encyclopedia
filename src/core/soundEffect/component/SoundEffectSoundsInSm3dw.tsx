import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import {GameStyles}   from 'core/gameStyle/GameStyles'
import GameStyleImage from 'core/gameStyle/component/GameStyleImage'
import SoundGroup     from 'util/file/sound/component/SoundGroup'

import SM3DW = GameStyles.SM3DW

interface SoundEffectSoundsInSm3dwProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function SoundEffectSoundsInSm3dw({value,}: SoundEffectSoundsInSm3dwProperties,) {
    const sounds = value.soundsInSm3dw
    if (sounds.isEmpty)
        return null

    const englishName = value.englishName
    return <div className="text-center">
        <GameStyleImage reference={SM3DW} className="mb-1"/>
        <SoundGroup value={sounds} title={it => `${englishName} (SM3DW - ${it.key})`}/>
    </div>
}
