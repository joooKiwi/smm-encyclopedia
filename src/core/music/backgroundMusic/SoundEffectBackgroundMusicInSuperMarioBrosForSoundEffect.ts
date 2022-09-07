import type {PossibleLink_LinkMusic, PossibleSMB2_SMB2Music} from './types';
import type {BackgroundMusic}                                from './BackgroundMusic';

/**
 * A "sound effect" "background music" made for a {@link SoundEffects sound effect}.
 *
 * It can have a link & {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} variant.
 */
export interface SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<LINK_MUSIC extends PossibleLink_LinkMusic = PossibleLink_LinkMusic,
    SMB2_MUSIC extends PossibleSMB2_SMB2Music = PossibleSMB2_SMB2Music, >
    extends BackgroundMusic<null, null, null, LINK_MUSIC, LINK_MUSIC, SMB2_MUSIC, SMB2_MUSIC, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null> {
}