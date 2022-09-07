import type {FullMusicPathOn}                                                from '../Music';
import type {Possible_Music, PossibleLink_LinkMusic, PossibleSMB2_SMB2Music} from './types';
import type {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect}       from './SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect';

import {BackgroundMusicContainer} from './BackgroundMusic.container';

export class SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer<LINK_MUSIC extends PossibleLink_LinkMusic, SMB2_MUSIC extends PossibleSMB2_SMB2Music, >
    extends BackgroundMusicContainer<null, null, null, LINK_MUSIC, LINK_MUSIC, SMB2_MUSIC, SMB2_MUSIC, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null>
    implements SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<LINK_MUSIC, SMB2_MUSIC> {

    public constructor(link: LINK_MUSIC, smb2: SMB2_MUSIC,) {
        super(null, null, null, link, link, smb2, smb2, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,);
    }

    protected override _createEveryMusics(): readonly FullMusicPathOn<Possible_Music>[] {
        return [this.linkMusic.smb, this.smb2Music.smb,];
    }

}
