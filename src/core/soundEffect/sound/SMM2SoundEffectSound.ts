import type {SMM2SoundEffectSoundFile}                                              from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {PossibleEditorValue, PossibleValueOnLinkOrSMB2Value, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export interface SMM2SoundEffectSound<SOUNDS extends readonly SMM2SoundEffectSoundFile[] = readonly SMM2SoundEffectSoundFile[],
    EDITOR_SOUNDS extends PossibleEditorValue_SMM2<SOUNDS> = PossibleEditorValue_SMM2<SOUNDS>,
    LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS> = PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>,
    SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS> = PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUNDS, LINK_SOUNDS, SMB2_SOUNDS> {

}

//TODO separate the SMM2 "sound effect" sound into 3 (sound effect only | sound effect + background music | background music only)

export type PossibleEditorValue_SMM2<SOUNDS extends readonly SMM2SoundEffectSoundFile[] = readonly SMM2SoundEffectSoundFile[], > = PossibleEditorValue<SOUNDS>
export type PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS extends readonly SMM2SoundEffectSoundFile[] = readonly SMM2SoundEffectSoundFile[], > = PossibleValueOnLinkOrSMB2Value<SOUNDS>
