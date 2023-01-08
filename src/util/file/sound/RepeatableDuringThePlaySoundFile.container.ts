import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'
import type {PossibleSoundFileExtension}       from 'util/file/sound/SoundFile'
import type {Time}                             from 'util/file/sound/time/Time'

import {AbstractRepeatableSoundFile} from 'util/file/sound/AbstractRepeatableSoundFile'
import {RepeatableTypes}             from 'util/file/sound/RepeatableTypes'

export class RepeatableDuringThePlaySoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, REPEATABLE_TIME extends Time = Time, >
    extends AbstractRepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableDuringThePlaySoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

    public override readonly repeatableType = RepeatableTypes.DURING_THE_PLAY

}
