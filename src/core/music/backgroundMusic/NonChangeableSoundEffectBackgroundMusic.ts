import type {BackgroundMusic}                                     from './BackgroundMusic'
import type {MusicSoundFile}                                      from '../file/MusicSoundFile'
import type {PossibleOther_FastMusic, PossibleOther_RegularMusic} from './types'

/**
 * A "sound effect" "background music" that is not changeable depending on the {@link Themes theme}.
 *
 * It only has a regular & a fast variation.
 */
export interface NonChangeableSoundEffectBackgroundMusic<MUSIC extends MusicSoundFile<PossibleOther_RegularMusic> = MusicSoundFile<PossibleOther_RegularMusic>, FAST_MUSIC extends MusicSoundFile<PossibleOther_FastMusic> = MusicSoundFile<PossibleOther_FastMusic>, >
    extends BackgroundMusic<MUSIC, MUSIC, FAST_MUSIC, null, null, null, null, MUSIC, MUSIC, FAST_MUSIC, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null> {
}