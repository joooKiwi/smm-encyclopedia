import type {Music}                                                                         from 'core/music/Music'
import type {PossibleOther_RegularMusic, PossibleSMB_EditorMusic, PossibleSMB_RegularMusic} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                                                from 'core/music/file/MusicSoundFile'
import type {PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name}  from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'
import type {PossibleSoundEffectName}                                                       from 'core/music/soundEffect/SingleSoundEffectMusic'

export interface SoundEffectMusic<out ALL extends PossibleSoundEffectMusicFileName = PossibleSoundEffectMusicFileName,
    out SOUND_EFFECT extends PossibleSoundEffectMusicName = PossibleSoundEffectMusicName,
    out EDITOR_SOUND_EFFECT extends PossibleSoundEffectMusicEditorName = PossibleSoundEffectMusicEditorName, >
    extends Music<ALL> {

    get soundEffect(): SOUND_EFFECT

    get editorSoundEffect(): EDITOR_SOUND_EFFECT

}

export type PossibleSoundEffectMusicName = NullOr<MusicSoundFile<| PossibleSoundEffectName | PossibleSoundEffectEditorOnly_Name | PossibleSMB_RegularMusic | PossibleOther_RegularMusic>>
export type PossibleSoundEffectMusicEditorName = NullOr<MusicSoundFile<| PossibleSoundEffectName | PossibleSoundEffectEditorOnly_EditorName | PossibleSMB_EditorMusic | PossibleOther_RegularMusic>>

export type PossibleSoundEffectMusicFileName = readonly NonNullable<| PossibleSoundEffectMusicName | PossibleSoundEffectMusicEditorName>[]
