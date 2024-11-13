import type {Array} from '@joookiwi/type'

import type {SoundEffectSoundFile}                  from 'core/soundEffect/file/SoundEffectSoundFile'
import type {SMM1ExclusiveSoundEffectSound}         from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM2SoundEffectSound}                  from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {PossibleEditorValue, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export interface SMM1StandaloneSoundEffectSound<out SOUNDS extends Array<SoundEffectSoundFile> = Array<SoundEffectSoundFile>,
    out EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>>
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    get exclusiveSMM1Sounds(): SMM1ExclusiveSoundEffectSound

    get exclusiveSMM2Sounds(): SMM2SoundEffectSound

}
