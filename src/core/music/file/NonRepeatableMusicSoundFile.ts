import type {MusicFileExtension, MusicFilePath, MusicSoundFile} from 'core/music/file/MusicSoundFile'
import type {PossibleMusicName}                                 from 'core/music/Music'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export class NonRepeatableMusicSoundFile<NAME extends PossibleMusicName, >
    extends NonRepeatableSoundFileContainer<MusicFilePath, NAME, MusicFileExtension>
    implements MusicSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('music/SMM2', name, 'wav',)
    }

}
