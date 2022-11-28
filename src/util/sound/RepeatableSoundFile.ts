import type {NullOr}                       from '../types'
import type {PossibleExtension, SoundFile} from './SoundFile'
import type {Time}                         from './time/Time'

export interface RepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends SoundFile<PATH, NAME, EXTENSION, REPEATABLE_TIME> {
}
