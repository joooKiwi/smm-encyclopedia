import type {PossibleMusicName}                                 from 'core/music/Music'
import type {MusicFileExtension, MusicFilePath, MusicSoundFile} from 'core/music/file/MusicSoundFile'
import type {Time}                                              from 'util/file/sound/time/Time'

import {RepeatableDuringThePlaySoundFileContainer} from 'util/file/sound/RepeatableDuringThePlaySoundFile.container'

export class RepeatableDuringThePlayMusicSoundFile<NAME extends PossibleMusicName, TIME extends Time = Time, >
    extends RepeatableDuringThePlaySoundFileContainer<MusicFilePath, NAME, MusicFileExtension, TIME>
    implements MusicSoundFile<NAME> {

    public constructor(name: NAME, time: TIME,) {
        super('music/SMM2', name, 'wav', time,)
    }

}
