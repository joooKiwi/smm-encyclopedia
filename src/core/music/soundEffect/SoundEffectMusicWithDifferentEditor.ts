import type {FullMusicPathOn}  from '../Music';
import type {SoundEffectMusic} from './SoundEffectMusic';

/** A {@link SoundEffects sound effect} that has a different editor track than the one played when playing */
export interface SoundEffectMusicWithDifferentEditor<SOUND_EFFECT extends PossibleSoundEffectEditorOnly_Name = PossibleSoundEffectEditorOnly_Name, EDITOR_SOUND_EFFECT extends PossibleSoundEffectEditorOnly_EditorName = PossibleSoundEffectEditorOnly_EditorName, >
    extends SoundEffectMusic<PossibleMusicArray<SOUND_EFFECT, EDITOR_SOUND_EFFECT>, SOUND_EFFECT, EDITOR_SOUND_EFFECT> {
}

export type PossibleSoundEffectEditorOnly_EditorName = 'BGM_Otoasobi_Dtbt_MurasameIcon';
export type PossibleSoundEffectEditorOnly_Name = 'BGM_Otoasobi_Dtbt_Murasame';

export type PossibleMusicArray<SOUND_EFFECT extends PossibleSoundEffectEditorOnly_Name = PossibleSoundEffectEditorOnly_Name, EDITOR_SOUND_EFFECT extends PossibleSoundEffectEditorOnly_EditorName = PossibleSoundEffectEditorOnly_EditorName, > = readonly [
    FullMusicPathOn<SOUND_EFFECT>, FullMusicPathOn<EDITOR_SOUND_EFFECT>,
];
