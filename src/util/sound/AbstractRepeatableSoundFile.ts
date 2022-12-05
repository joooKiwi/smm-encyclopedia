import type {PossibleExtension}   from 'util/sound/SoundFile'
import type {RepeatableSoundFile} from 'util/sound/RepeatableSoundFile'
import type {Time}                from 'util/sound/time/Time'
import type {NullOr}              from 'util/types/nullable'

import {AbstractSoundFile} from 'util/sound/AbstractSoundFile'

export abstract class AbstractRepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,)
    }

}
