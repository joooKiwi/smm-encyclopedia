import type {Array} from '@joookiwi/type'

import type {SMM2SoundEffectSoundFile}                                              from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleEditorValue, PossibleValueOnLinkOrSMB2Value, SoundEffectSound} from 'core/soundEffect/sound/SoundEffectSound'

export interface SMM2SoundEffectSound<out SOUNDS extends Array<SMM2SoundEffectSoundFile> = Array<SMM2SoundEffectSoundFile>,
    out EDITOR_SOUNDS extends PossibleEditorValue_SMM2<SOUNDS> = PossibleEditorValue_SMM2<SOUNDS>,
    out LINK_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS> = PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>,
    out SMB2_SOUNDS extends PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS> = PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS>, >
    extends SoundEffectSound<SOUNDS, EDITOR_SOUNDS, LINK_SOUNDS, SMB2_SOUNDS> {}

//TODO separate the SMM2 "sound effect" sound into 3 (sound effect only | sound effect + background music | background music only)

export type PossibleEditorValue_SMM2<SOUNDS extends Array<SMM2SoundEffectSoundFile> = Array<SMM2SoundEffectSoundFile>, > = PossibleEditorValue<SOUNDS>
export type PossibleValueOnLinkOrSMB2Value_SMM2<SOUNDS extends Array<SMM2SoundEffectSoundFile> = Array<SMM2SoundEffectSoundFile>, > = PossibleValueOnLinkOrSMB2Value<SOUNDS>
