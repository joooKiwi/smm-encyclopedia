import type {PossibleEditorValue, SoundEffectSound} from './SoundEffectSound';
import type {SMM1SoundEffectSoundFile}              from '../file/SMM1SoundEffectSoundFile';

export interface SMM1ExclusiveSoundEffectSound<SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[],
    EDITOR_SOUND extends PossibleEditorValue_SMM1<SOUNDS> = PossibleEditorValue_SMM1<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND, readonly [], readonly []> {

}

export type PossibleEditorValue_SMM1<SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[], > = PossibleEditorValue<SOUNDS>;
