import type {SMM1SoundEffectSoundFile}              from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {PossibleEditorValue, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export interface SMM1ExclusiveSoundEffectSound<SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[],
    EDITOR_SOUND extends PossibleEditorValue_SMM1<SOUNDS> = PossibleEditorValue_SMM1<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND, EmptyArray, EmptyArray> {

}

export type PossibleEditorValue_SMM1<SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[], > = PossibleEditorValue<SOUNDS>
