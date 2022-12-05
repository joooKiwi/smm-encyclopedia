import type {Possible_Music, PossibleLink_LinkMusic, PossibleSMB2_SMB2Music} from 'core/music/backgroundMusic/types'
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect}       from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import type {MusicSoundFile}                                                 from 'core/music/file/MusicSoundFile'

import {BackgroundMusicContainer} from 'core/music/backgroundMusic/BackgroundMusic.container'

export class SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer<LINK_MUSIC extends MusicSoundFile<PossibleLink_LinkMusic>, SMB2_MUSIC extends MusicSoundFile<PossibleSMB2_SMB2Music>, >
    extends BackgroundMusicContainer<null, null, null, LINK_MUSIC, LINK_MUSIC, SMB2_MUSIC, SMB2_MUSIC, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null>
    implements SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<LINK_MUSIC, SMB2_MUSIC> {

    public constructor(link: LINK_MUSIC, smb2: SMB2_MUSIC,) {
        super(null, null, null, link, link, smb2, smb2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,)
    }

    protected override _createEveryMusics(): readonly MusicSoundFile<Possible_Music>[] {
        return [this.linkMusic.smb, this.smb2Music.smb,]
    }

}
