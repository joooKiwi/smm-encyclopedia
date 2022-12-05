import type {RepeatableSoundFile} from 'util/sound/RepeatableSoundFile'
import type {PossibleExtension}   from 'util/sound/SoundFile'
import type {Time}                from 'util/sound/time/Time'

export interface RepeatableDuringThePlaySoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends Time = Time, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
