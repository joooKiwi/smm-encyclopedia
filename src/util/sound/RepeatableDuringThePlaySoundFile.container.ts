import type {PossibleExtension}                from './SoundFile'
import type {RepeatableDuringThePlaySoundFile} from './RepeatableDuringThePlaySoundFile'
import type {Time}                             from './time/Time'

import {AbstractRepeatableSoundFile} from './AbstractRepeatableSoundFile'
import {RepeatableTypes}             from './RepeatableTypes'

export class RepeatableDuringThePlaySoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends Time = Time, >
    extends AbstractRepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableDuringThePlaySoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

    public override readonly repeatableType = RepeatableTypes.DURING_THE_PLAY

}
