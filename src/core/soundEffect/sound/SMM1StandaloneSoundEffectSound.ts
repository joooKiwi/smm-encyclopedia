import type {PossibleSoundEffectSoundFileName}      from './types';
import type {SMM1ExclusiveSoundEffectSound}         from './SMM1ExclusiveSoundEffectSound';
import type {SMM2SoundEffectSound}                  from './SMM2SoundEffectSound';
import type {PossibleEditorValue, SoundEffectSound} from './SoundEffectSound';

export interface SMM1StandaloneSoundEffectSound<SOUNDS extends readonly PossibleSoundEffectSoundFileName[] = readonly PossibleSoundEffectSoundFileName[],
    EDITOR_SOUND extends PossibleEditorValue<SOUNDS> = PossibleEditorValue<SOUNDS>>
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND> {

    get exclusiveSMM1Sounds(): SMM1ExclusiveSoundEffectSound

    get exclusiveSMM2Sounds(): SMM2SoundEffectSound

}
