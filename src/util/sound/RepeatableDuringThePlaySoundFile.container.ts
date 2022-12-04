import type {RepeatableDuringThePlaySoundFile} from 'util/sound/RepeatableDuringThePlaySoundFile'
import type {PossibleExtension}                from 'util/sound/SoundFile'
import type {Time}                             from 'util/sound/time/Time'

import {AbstractRepeatableSoundFile} from 'util/sound/AbstractRepeatableSoundFile'
import {RepeatableTypes}             from 'util/sound/RepeatableTypes'

export class RepeatableDuringThePlaySoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends Time = Time, >
    extends AbstractRepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableDuringThePlaySoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

    public override readonly repeatableType = RepeatableTypes.DURING_THE_PLAY

}
