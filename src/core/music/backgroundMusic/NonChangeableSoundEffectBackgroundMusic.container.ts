import type {MusicSoundFile}                                                      from '../file/MusicSoundFile'
import type {NonChangeableSoundEffectBackgroundMusic}                             from './NonChangeableSoundEffectBackgroundMusic'
import type {Possible_Music, PossibleOther_FastMusic, PossibleOther_RegularMusic} from './types'

import {BackgroundMusicContainer} from './BackgroundMusic.container'

export class NonChangeableSoundEffectBackgroundMusicContainer<MUSIC extends MusicSoundFile<PossibleOther_RegularMusic>, FAST_MUSIC extends MusicSoundFile<PossibleOther_FastMusic>, >
    extends BackgroundMusicContainer<MUSIC, MUSIC, FAST_MUSIC, null, null, null, null, MUSIC, MUSIC, FAST_MUSIC, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null, MUSIC, MUSIC, null, FAST_MUSIC, null>
    implements NonChangeableSoundEffectBackgroundMusic<MUSIC, FAST_MUSIC> {

    public constructor(music: MUSIC, fastMusic: FAST_MUSIC,) {
        super(music, music, fastMusic, null, null, null, null, music, music, fastMusic, music, music, null, fastMusic, null, music, music, null, fastMusic, null, music, music, null, fastMusic, null,)
    }

    protected override _createEveryMusics(): readonly MusicSoundFile<Possible_Music>[] {
        return [this.regularMusic.smb, this.fastMusic.smb,]
    }

}
