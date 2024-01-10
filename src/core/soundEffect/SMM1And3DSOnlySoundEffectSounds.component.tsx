import type {SoundEffectSoundsComponentProperties} from 'core/soundEffect/SoundEffectSounds.component.types'

import SMM1And3DSSoundEffectSoundsComponent from 'core/soundEffect/SMM1And3DSSoundEffectSounds.component'

export default function SMM1And3DSOnlySoundEffectSoundsComponent({reference,}: SoundEffectSoundsComponentProperties,) {
    if (reference.sounds_standaloneSmm1.length === 0)
        return null
    return <div className="soundEffect-sounds-container sound-effect-sounds-smm1-only-container">
        <SMM1And3DSSoundEffectSoundsComponent reference={reference}/>
    </div>
}
