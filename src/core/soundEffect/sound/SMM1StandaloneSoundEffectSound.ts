import type {SMM1ExclusiveSoundEffectSound}         from './SMM1ExclusiveSoundEffectSound';
import type {SMM2SoundEffectSound}                  from './SMM2SoundEffectSound';
import type {SoundEffectSoundFile}                  from '../file/SoundEffectSoundFile';
import type {PossibleEditorValue, SoundEffectSound} from './SoundEffectSound';

export interface SMM1StandaloneSoundEffectSound<SOUNDS extends readonly SoundEffectSoundFile[] = readonly SoundEffectSoundFile[],
    EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>>
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    get exclusiveSMM1Sounds(): SMM1ExclusiveSoundEffectSound

    get exclusiveSMM2Sounds(): SMM2SoundEffectSound

}
