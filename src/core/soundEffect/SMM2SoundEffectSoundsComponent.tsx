import type {SoundEffectSoundsComponentProperties} from 'core/soundEffect/SoundEffectSounds.component.types'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

export default function SMM2SoundEffectSoundsComponent({reference,}: SoundEffectSoundsComponentProperties,) {
    const englishName = reference.englishName
    return <div key={`${englishName} (sound effect sounds - SMM2)`} className="soundEffect-sounds-smm2-container">
        {reference.sounds_smm2.map(it =>
            <div key={`${englishName} (sound effect sound - SMM2 - ${it.key})`} className="soundEffect-sound-container soundEffect-sound-smm2-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                <SimpleSoundComponent file={it} title={`${englishName} (${it.key})`}/>
            </div>)}
    </div>
}
