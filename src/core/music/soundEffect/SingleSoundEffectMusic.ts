import type {SoundEffectMusic} from './SoundEffectMusic';
import type {FullMusicPathOn}  from '../Music';

/** A {@link SoundEffects sound effect} that has only 1 track */
export interface SingleSoundEffectMusic<SOUND_EFFECT extends PossibleSoundEffectName = PossibleSoundEffectName, >
    extends SoundEffectMusic<PossibleMusicArray<SOUND_EFFECT>, SOUND_EFFECT, SOUND_EFFECT> {
}

export type PossibleSoundEffectName = | 'se_otoasobi_clowd' | 'otoasobi_scat' | 'se_otoasobi_ohayashi';

export type PossibleMusicArray<SOUND_EFFECT extends PossibleSoundEffectName = PossibleSoundEffectName, > = readonly [
    FullMusicPathOn<SOUND_EFFECT>,
];
