import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'
import type {PossibleSoundFileExtension}       from 'util/file/sound/SoundFile'
import type {Time}                             from 'util/file/sound/time/Time'

import {RepeatableTypes}           from 'util/file/sound/RepeatableTypes'
import {AbstractExternalSoundFile} from 'util/file/sound/AbstractExternalSoundFile'

export class RepeatableDuringThePlayExternalSoundFileContainer<const PATH extends string = string,
    const NAME extends string = string,
    const EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension,
    const REPEATABLE_TIME extends Time = Time, >
    extends AbstractExternalSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableDuringThePlaySoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

    public override readonly repeatableType = RepeatableTypes.DURING_THE_PLAY

}
