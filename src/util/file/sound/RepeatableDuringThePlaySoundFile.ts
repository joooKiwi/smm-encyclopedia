import type {RepeatableSoundFile}        from 'util/file/sound/RepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'
import type {Time}                       from 'util/file/sound/time/Time'

export interface RepeatableDuringThePlaySoundFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension,
    out REPEATABLE_TIME extends Time = Time, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
