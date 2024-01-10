import type {SoundEffectSoundsComponentProperties} from 'core/soundEffect/SoundEffectSounds.component.types'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

export default function SMM1And3DSSoundEffectSoundsComponent({reference,}: SoundEffectSoundsComponentProperties,) {
    const englishName = reference.englishName
    return <div key={`${englishName} (sound effect sounds - SMM1&3DS)`} className="soundEffect-sounds-smm1-container">{
        reference.sounds_standaloneSmm1.map(it =>
            <div key={`${englishName} (sound effect sound - SMM1&3DS - ${it.key})`} className="soundEffect-sound-container soundEffect-sound-smm1-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                <SimpleSoundComponent file={it} title={`${englishName} (${it.key})`}/>
            </div>)
    }</div>
}
