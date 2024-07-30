import type {RepeatableDuringThePlaySoundFile} from 'util/file/sound/RepeatableDuringThePlaySoundFile'
import type {PossibleSoundFileExtension}       from 'util/file/sound/SoundFile'
import type {Time}                             from 'util/file/sound/time/Time'

import {RepeatableTypes}           from 'util/file/sound/RepeatableTypes'
import {AbstractExternalSoundFile} from 'util/file/sound/AbstractExternalSoundFile'

export class RepeatableDuringThePlayExternalSoundFileContainer<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension,
    const out REPEATABLE_TIME extends Time = Time, >
    extends AbstractExternalSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableDuringThePlaySoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

    public override readonly repeatableType = RepeatableTypes.DURING_THE_PLAY

}
