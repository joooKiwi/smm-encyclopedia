import type {PossibleSoundFileExtension, SoundFile} from 'util/file/sound/SoundFile'
import type {Time}                                  from 'util/file/sound/time/Time'

export interface RepeatableSoundFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension,
    out REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
