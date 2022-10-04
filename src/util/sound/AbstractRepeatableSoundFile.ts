import type {PossibleExtension}   from './SoundFile';
import type {RepeatableSoundFile} from './RepeatableSoundFile';
import type {Time}                from './time/Time';

import {AbstractSoundFile} from './AbstractSoundFile';

export abstract class AbstractRepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends | Time | null = | Time | null, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME>
    implements RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {

    protected constructor(path: PATH, name: NAME, extension: EXTENSION, repeatableTime: REPEATABLE_TIME,) {
        super(path, name, extension, repeatableTime,);
    }

}
