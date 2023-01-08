import type {RepeatableSoundFile}        from 'util/file/sound/RepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'
import type {Time}                       from 'util/file/sound/time/Time'

export interface RepeatableDuringThePlaySoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, REPEATABLE_TIME extends Time = Time, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
