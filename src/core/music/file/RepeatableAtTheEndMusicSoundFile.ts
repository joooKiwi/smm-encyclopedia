import type {PossibleMusicName} from '../Music'

import {RepeatableAtTheEndSoundFileContainer} from '../../../util/sound/RepeatableAtTheEndSoundFile.container'
import {MusicFileExtension, MusicFilePath}    from './MusicSoundFile'

export class RepeatableAtTheEndMusicSoundFile<NAME extends PossibleMusicName, >
    extends RepeatableAtTheEndSoundFileContainer<MusicFilePath, NAME, MusicFileExtension> {

    public constructor(name: NAME) {
        super('music/SMM2', name, 'wav',)
    }

}
