import type {PossibleEditorValue, SoundEffectSound} from './SoundEffectSound';
import type {PossibleSoundEffectSoundFileName_SMM1} from './types';

export interface SMM1ExclusiveSoundEffectSound<SOUNDS extends readonly PossibleSoundEffectSoundFileName_SMM1[] = readonly PossibleSoundEffectSoundFileName_SMM1[],
    EDITOR_SOUND extends PossibleEditorValue_SMM1<SOUNDS> = PossibleEditorValue_SMM1<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND, readonly [], readonly []> {

}

export type PossibleEditorValue_SMM1<SOUNDS extends readonly PossibleSoundEffectSoundFileName_SMM1[] = readonly PossibleSoundEffectSoundFileName_SMM1[], > = PossibleEditorValue<SOUNDS>;
