import type {BackgroundMusic}                                from 'core/music/backgroundMusic/BackgroundMusic'
import type {PossibleLink_LinkMusic, PossibleSMB2_SMB2Music} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                 from 'core/music/file/MusicSoundFile'

/**
 * A "sound effect" "background music" made for a {@link SoundEffects sound effect}.
 *
 * It can have a link & {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} variant.
 */
export interface SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<out LINK_MUSIC extends MusicSoundFile<PossibleLink_LinkMusic> = MusicSoundFile<PossibleLink_LinkMusic>,
    out SMB2_MUSIC extends MusicSoundFile<PossibleSMB2_SMB2Music> = MusicSoundFile<PossibleSMB2_SMB2Music>, >
    extends BackgroundMusic<null, null, null, LINK_MUSIC, LINK_MUSIC, SMB2_MUSIC, SMB2_MUSIC, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null> {}
