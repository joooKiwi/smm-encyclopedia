import type {PossibleMusicName} from 'core/music/Music'

import {MusicFileExtension, MusicFilePath}    from 'core/music/file/MusicSoundFile'
import {RepeatableAtTheEndSoundFileContainer} from 'util/file/sound/RepeatableAtTheEndSoundFile.container'

export class RepeatableAtTheEndMusicSoundFile<NAME extends PossibleMusicName, >
    extends RepeatableAtTheEndSoundFileContainer<MusicFilePath, NAME, MusicFileExtension> {

    public constructor(name: NAME) {
        super('music/SMM2', name, 'wav',)
    }

}
