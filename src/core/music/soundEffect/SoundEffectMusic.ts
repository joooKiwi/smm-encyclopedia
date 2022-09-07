import type {FullMusicPathOn, Music, PossibleMusicArray}                                    from '../Music';
import type {PossibleOther_RegularMusic, PossibleSMB_EditorMusic, PossibleSMB_RegularMusic} from '../backgroundMusic/types';
import type {PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name}  from './SoundEffectMusicWithDifferentEditor';
import type {PossibleSoundEffectName}                                                       from './SingleSoundEffectMusic';

export interface SoundEffectMusic<ALL extends PossibleMusicArray = PossibleMusicArray, SOUND_EFFECT extends PossibleSoundEffectMusicName = PossibleSoundEffectMusicName, EDITOR_SOUND_EFFECT extends PossibleSoundEffectMusicEditorName = PossibleSoundEffectMusicEditorName, >
    extends Music<ALL> {

    get soundEffect(): FullMusicPathOn<SOUND_EFFECT>

    get editorSoundEffect(): FullMusicPathOn<EDITOR_SOUND_EFFECT>

}

export type PossibleSoundEffectMusicName = | PossibleSoundEffectName | PossibleSoundEffectEditorOnly_Name | PossibleSMB_RegularMusic | PossibleOther_RegularMusic | null;
export type PossibleSoundEffectMusicEditorName = | PossibleSoundEffectName | PossibleSoundEffectEditorOnly_EditorName | PossibleSMB_EditorMusic | PossibleOther_RegularMusic | null;

export type PossibleSoundEffectMusicFileName = | PossibleSoundEffectMusicName | PossibleSoundEffectMusicEditorName;
