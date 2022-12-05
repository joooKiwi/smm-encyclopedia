import type {RepeatableSoundFile} from 'util/sound/RepeatableSoundFile'
import type {PossibleExtension}   from 'util/sound/SoundFile'

export interface RepeatableAtTheEndSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, null> {
}
