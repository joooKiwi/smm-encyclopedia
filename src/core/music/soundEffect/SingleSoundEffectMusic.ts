import type {MusicSoundFile}   from 'core/music/file/MusicSoundFile'
import type {SoundEffectMusic} from 'core/music/soundEffect/SoundEffectMusic'

/** A {@link SoundEffects sound effect} that has only 1 track */
export interface SingleSoundEffectMusic<out SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectName> = MusicSoundFile<PossibleSoundEffectName>, >
    extends SoundEffectMusic<PossibleMusicArray<SOUND_EFFECT>, SOUND_EFFECT, SOUND_EFFECT> {}

export type PossibleSoundEffectName = | 'se_otoasobi_clowd' | 'otoasobi_scat' | 'se_otoasobi_ohayashi'

export type PossibleMusicArray<SOUND_EFFECT extends MusicSoundFile<PossibleSoundEffectName> = MusicSoundFile<PossibleSoundEffectName>, > = readonly [
    SOUND_EFFECT,
]
