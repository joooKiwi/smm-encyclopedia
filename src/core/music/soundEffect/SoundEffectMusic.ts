import type {Music}                                                                         from '../Music'
import type {MusicSoundFile}                                                                from '../file/MusicSoundFile'
import type {NullOr}                                                                        from '../../../util/types'
import type {PossibleOther_RegularMusic, PossibleSMB_EditorMusic, PossibleSMB_RegularMusic} from '../backgroundMusic/types'
import type {PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name}  from './SoundEffectMusicWithDifferentEditor'
import type {PossibleSoundEffectName}                                                       from './SingleSoundEffectMusic'

export interface SoundEffectMusic<ALL extends PossibleSoundEffectMusicFileName = PossibleSoundEffectMusicFileName, SOUND_EFFECT extends PossibleSoundEffectMusicName = PossibleSoundEffectMusicName, EDITOR_SOUND_EFFECT extends PossibleSoundEffectMusicEditorName = PossibleSoundEffectMusicEditorName, >
    extends Music<ALL> {

    get soundEffect(): SOUND_EFFECT

    get editorSoundEffect(): EDITOR_SOUND_EFFECT

}

export type PossibleSoundEffectMusicName = NullOr<MusicSoundFile<| PossibleSoundEffectName | PossibleSoundEffectEditorOnly_Name | PossibleSMB_RegularMusic | PossibleOther_RegularMusic>>
export type PossibleSoundEffectMusicEditorName = NullOr<MusicSoundFile<| PossibleSoundEffectName | PossibleSoundEffectEditorOnly_EditorName | PossibleSMB_EditorMusic | PossibleOther_RegularMusic>>

export type PossibleSoundEffectMusicFileName = readonly NonNullable<| PossibleSoundEffectMusicName | PossibleSoundEffectMusicEditorName>[]
