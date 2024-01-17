import type {SoundEffectSoundsComponentProperties} from 'core/soundEffect/SoundEffectSounds.component.types'

import SMM1And3DSSoundEffectSoundsComponent from 'core/soundEffect/SMM1And3DSSoundEffectSounds.component'
import SMM2SoundEffectSoundsComponent       from 'core/soundEffect/SMM2SoundEffectSoundsComponent'

export default function SoundEffectSoundsComponent({reference,}: SoundEffectSoundsComponentProperties,) {
    const isSMM1Empty = reference.sounds_exclusiveSmm1.length === 0
    const isSMM2Empty = reference.sounds_smm2.length === 0

    if (isSMM1Empty && isSMM2Empty)
        return null

    if (isSMM1Empty && !isSMM2Empty)
        return <div className="soundEffect-sounds-container sound-effect-sounds-smm2-only-container">
            <SMM2SoundEffectSoundsComponent reference={reference}/>
        </div>
    if (!isSMM1Empty && isSMM2Empty)
        return <div className="soundEffect-sounds-container sound-effect-sounds-smm1-only-container">
            <SMM1And3DSSoundEffectSoundsComponent reference={reference}/>
        </div>
    return <div className="soundEffect-sounds-container">
        <SMM1And3DSSoundEffectSoundsComponent reference={reference}/>
        <hr className="my-1"/>
        <SMM2SoundEffectSoundsComponent reference={reference}/>
    </div>
}
