import type {Array} from '@joookiwi/type'

import type {MusicSoundFile}                                                                                                                                                                                                                         from 'core/music/file/MusicSoundFile'
import type {Possible_Music}                                                                                                                                                                                                                         from 'core/music/backgroundMusic/types'
import type {PossibleSoundEffectEditorOnly_EditorName as PossibleSoundEffectEditorOnly_EditorName_SoundEffectMusicWithDifferentEditor, PossibleSoundEffectEditorOnly_Name as PossibleSoundEffectEditorOnly_Name_SoundEffectMusicWithDifferentEditor} from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'
import type {PossibleSoundEffectName as PossibleSoundEffectName_SingleSoundEffectMusic}                                                                                                                                                              from 'core/music/soundEffect/SingleSoundEffectMusic'

/**
 * The base class for every music (for a sound effect or standalone) played in the game.
 *
 * They are located in the public folder (<i>public/music/SMB2/*.wav</i>)
 */
export interface Music<out ALL extends Array<MusicSoundFile> = Array<MusicSoundFile>, > {

    readonly everyMusics: ALL

}

export type PossibleMusicName = | PossibleSoundEffectName_SingleSoundEffectMusic
                                | PossibleSoundEffectEditorOnly_EditorName_SoundEffectMusicWithDifferentEditor | PossibleSoundEffectEditorOnly_Name_SoundEffectMusicWithDifferentEditor
                                | Possible_Music
