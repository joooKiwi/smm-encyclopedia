import type {SMM1SoundEffectSoundFile}              from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleEditorValue, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export interface SMM1ExclusiveSoundEffectSound<out SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[],
    out EDITOR_SOUND extends PossibleEditorValue_SMM1<SOUNDS> = PossibleEditorValue_SMM1<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUND, EmptyArray, EmptyArray> {}

export type PossibleEditorValue_SMM1<SOUNDS extends readonly SMM1SoundEffectSoundFile[] = readonly SMM1SoundEffectSoundFile[], > = PossibleEditorValue<SOUNDS>
