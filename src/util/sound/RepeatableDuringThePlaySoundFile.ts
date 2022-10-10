import type {PossibleExtension}   from './SoundFile';
import type {Time}                from './time/Time';
import type {RepeatableSoundFile} from './RepeatableSoundFile';

export interface RepeatableDuringThePlaySoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends Time = Time, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
