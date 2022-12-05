import type {SoundEffectMusic} from 'core/music/soundEffect/SoundEffectMusic'
import type {MusicSoundFile}   from 'core/music/file/MusicSoundFile'

/** A {@link SoundEffects sound effect} that has a different editor track than the one played when playing */
export interface SoundEffectMusicWithDifferentEditor<SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectEditorOnly_Name> = MusicSoundFile<PossibleSoundEffectEditorOnly_Name>, EDITOR_SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName> = MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName>, >
    extends SoundEffectMusic<PossibleMusicArray<SOUND_EFFECT, EDITOR_SOUND_EFFECT>, SOUND_EFFECT, EDITOR_SOUND_EFFECT> {
}

export type PossibleSoundEffectEditorOnly_EditorName = 'BGM_Otoasobi_Dtbt_MurasameIcon'
export type PossibleSoundEffectEditorOnly_Name = 'BGM_Otoasobi_Dtbt_Murasame'

export type PossibleMusicArray<SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectEditorOnly_Name> = MusicSoundFile<PossibleSoundEffectEditorOnly_Name>, EDITOR_SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName> = MusicSoundFile<PossibleSoundEffectEditorOnly_EditorName>, > = readonly [
    name: SOUND_EFFECT, editorName: EDITOR_SOUND_EFFECT,
]
