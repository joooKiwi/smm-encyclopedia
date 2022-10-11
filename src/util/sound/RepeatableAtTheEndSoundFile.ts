import type {PossibleExtension}   from './SoundFile'
import type {RepeatableSoundFile} from './RepeatableSoundFile'

export interface RepeatableAtTheEndSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, null> {
}
