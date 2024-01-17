import type {SoundEffectSoundsComponentProperties} from 'core/soundEffect/SoundEffectSounds.component.types'

import SMM2SoundEffectSoundsComponent from 'core/soundEffect/SMM2SoundEffectSoundsComponent'

export default function SMM2OnlySoundEffectSoundsComponent({reference,}: SoundEffectSoundsComponentProperties,) {
    if (reference.sounds_smm2.length === 0)
        return null
    return <div className="soundEffect-sounds-container sound-effect-sounds-smm2-only-container">
        <SMM2SoundEffectSoundsComponent reference={reference}/>
    </div>
}
