import type {MusicSoundFile} from './file/MusicSoundFile';
import type {Possible_Music} from './backgroundMusic/types';
import type {PossibleSoundEffectEditorOnly_EditorName as PossibleSoundEffectEditorOnly_EditorName_SoundEffectMusicWithDifferentEditor, PossibleSoundEffectEditorOnly_Name as PossibleSoundEffectEditorOnly_Name_SoundEffectMusicWithDifferentEditor} from './soundEffect/SoundEffectMusicWithDifferentEditor';
import type {PossibleSoundEffectName as PossibleSoundEffectName_SingleSoundEffectMusic}                                                                                                                                                              from './soundEffect/SingleSoundEffectMusic';

/**
 * The base class for every music (for a sound effect or standalone) played in the game.
 *
 * They are located in the public folder (<i>public/music/SMB2/*.wav</i>)
 */
export interface Music<ALL extends readonly MusicSoundFile[] = readonly MusicSoundFile[], > {

    get everyMusics(): ALL

}

export type PossibleMusicName = | PossibleSoundEffectName_SingleSoundEffectMusic
                                | PossibleSoundEffectEditorOnly_EditorName_SoundEffectMusicWithDifferentEditor | PossibleSoundEffectEditorOnly_Name_SoundEffectMusicWithDifferentEditor
                                | Possible_Music;
