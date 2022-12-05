import type {NullOr}                       from 'types/nullable'
import type {PossibleExtension, SoundFile} from 'util/sound/SoundFile'
import type {Time}                         from 'util/sound/time/Time'

export interface RepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
