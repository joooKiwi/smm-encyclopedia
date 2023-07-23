import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'
import type {RepeatableSoundFile}        from 'util/file/sound/RepeatableSoundFile'
import type {Time}                       from 'util/file/sound/time/Time'

import {AbstractSoundFile} from 'util/file/sound/AbstractSoundFile'

export abstract class AbstractRepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

}
