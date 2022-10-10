import type {MusicFileExtension, MusicFilePath, MusicSoundFile} from './MusicSoundFile';
import type {PossibleMusicName}                                 from '../Music';
import type {Time}                                              from '../../../util/sound/time/Time';

import {RepeatableDuringThePlaySoundFileContainer} from '../../../util/sound/RepeatableDuringThePlaySoundFile.container';

export class RepeatableDuringThePlayMusicSoundFile<NAME extends PossibleMusicName, TIME extends Time = Time, >
    extends RepeatableDuringThePlaySoundFileContainer<MusicFilePath, NAME, MusicFileExtension, TIME>
    implements MusicSoundFile<NAME> {

    public constructor(name: NAME, time: TIME,) {
        super('music/SMM2', name, 'wav', time,);
    }

}
