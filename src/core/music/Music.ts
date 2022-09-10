import type {BasePath}                                                                     from '../../variables';
import type {Possible_Music}                                                               from './backgroundMusic/types';
import type {PossibleMusicArray as PossibleMusicArray_SingleSoundEffectMusic}              from './soundEffect/SingleSoundEffectMusic';
import type {PossibleMusicArray as PossibleMusicArray_SoundEffectMusicWithDifferentEditor} from './soundEffect/SoundEffectMusicWithDifferentEditor';
import type {PossibleSoundEffectMusicFileName}                                             from './soundEffect/SoundEffectMusic';

/**
 * The base class for every music (for a sound effect or standalone) played in the game.
 *
 * They are located in the public folder (<i>public/music/SMB2/*.wav</i>)
 */
export interface Music<ALL extends PossibleMusicArray = PossibleMusicArray, > {

    get everyMusics(): ALL

}

export type PossibleMusicArray = | PossibleMusicArray_SingleSoundEffectMusic | PossibleMusicArray_SoundEffectMusicWithDifferentEditor | readonly FullMusicPathOn<Possible_Music>[];

export type FullMusicPathOn<NAME extends | PossibleSoundEffectMusicFileName | Possible_Music | null = | PossibleSoundEffectMusicFileName | Possible_Music | null, >
    = NAME extends null ? null : `/${BasePath}/music/SMM2/${NAME}.wav`;
