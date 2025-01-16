import './SoundEffectSounds.scss'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import SoundEffectSoundsInNsmbu        from 'core/soundEffect/component/SoundEffectSoundsInNsmbu'
import SoundEffectSoundsInNsmbuOnYoshi from 'core/soundEffect/component/SoundEffectSoundsInNsmbuOnYoshi'
import SoundEffectSoundsInSm3dw        from 'core/soundEffect/component/SoundEffectSoundsInSm3dw'
import SoundEffectSoundsInSmb          from 'core/soundEffect/component/SoundEffectSoundsInSmb'
import SoundEffectSoundsInSmbOnLink    from 'core/soundEffect/component/SoundEffectSoundsInSmbOnLink'
import SoundEffectSoundsInSmbOnSmb2    from 'core/soundEffect/component/SoundEffectSoundsInSmbOnSmb2'
import SoundEffectSoundsInSmb3         from 'core/soundEffect/component/SoundEffectSoundsInSmb3'
import SoundEffectSoundsInSmw          from 'core/soundEffect/component/SoundEffectSoundsInSmw'
import SoundGroup                      from 'util/file/sound/component/SoundGroup'

interface Smm1Or3dsSoundEffectSoundsProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function Smm2SoundEffectSounds({value,}: Smm1Or3dsSoundEffectSoundsProperties,) {
    const englishName = value.englishName
    return <div className="soundEffectSounds-container">
        <SoundGroup value={value.soundsInNoSpecificGameStyleInSmm2} title={it => `${englishName} (SMM1 - ${it.key})`}/>
        <SoundEffectSoundsInSmb value={value}/>
        <SoundEffectSoundsInSmbOnLink value={value}/>
        <SoundEffectSoundsInSmbOnSmb2 value={value}/>
        <SoundEffectSoundsInSmb3 value={value}/>
        <SoundEffectSoundsInSmw value={value}/>
        <SoundEffectSoundsInNsmbu value={value}/>
        <SoundEffectSoundsInNsmbuOnYoshi value={value}/>
        <SoundEffectSoundsInSm3dw value={value}/>
    </div>
}
