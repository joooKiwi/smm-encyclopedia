import './SoundEffectSounds.scss'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {SoundEffects}    from 'core/soundEffect/SoundEffects'

import SoundEffectSoundsInNsmbu        from 'core/soundEffect/component/SoundEffectSoundsInNsmbu'
import SoundEffectSoundsInNsmbuOnYoshi from 'core/soundEffect/component/SoundEffectSoundsInNsmbuOnYoshi'
import SoundEffectSoundsInSmb          from 'core/soundEffect/component/SoundEffectSoundsInSmb'
import SoundEffectSoundsInSmb3         from 'core/soundEffect/component/SoundEffectSoundsInSmb3'
import SoundEffectSoundsInSmw          from 'core/soundEffect/component/SoundEffectSoundsInSmw'
import SoundGroup                      from 'util/file/sound/component/SoundGroup'

interface Smm1Or3dsSoundEffectSoundsProperties
    extends ReactProperties {

    readonly value: SoundEffects

}

/** @reactComponent */
export default function Smm1Or3dsSoundEffectSounds({value,}: Smm1Or3dsSoundEffectSoundsProperties,) {
    const {englishName, soundsInNoSpecificGameStyleInSmm1,} = value
    return <div className="soundEffectSounds-container">
        <SoundGroup value={soundsInNoSpecificGameStyleInSmm1} title={it => `${englishName} (SMM1 - ${it.key})`}/>
        <SoundEffectSoundsInSmb value={value}/>
        <SoundEffectSoundsInSmb3 value={value}/>
        <SoundEffectSoundsInSmw value={value}/>
        <SoundEffectSoundsInNsmbu value={value}/>
        <SoundEffectSoundsInNsmbuOnYoshi value={value}/>
    </div>
}
