import type {PossibleSoundFileExtension, SoundFile} from 'util/file/sound/SoundFile'
import type {Time}                                  from 'util/file/sound/time/Time'

export interface RepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
