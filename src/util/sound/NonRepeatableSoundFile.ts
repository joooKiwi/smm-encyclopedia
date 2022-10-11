import type {PossibleExtension, SoundFile} from './SoundFile'

export interface NonRepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends SoundFile<PATH, NAME, EXTENSION, null> {
}
