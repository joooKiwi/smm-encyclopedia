import type {MusicFileExtension, MusicFilePath, MusicSoundFile} from './MusicSoundFile';
import type {PossibleMusicName}                                 from '../Music';

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container';

export class NonRepeatableMusicSoundFile<NAME extends PossibleMusicName, >
    extends NonRepeatableSoundFileContainer<MusicFilePath, NAME, MusicFileExtension>
    implements MusicSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('music/SMM2', name, 'wav',);
    }

}
