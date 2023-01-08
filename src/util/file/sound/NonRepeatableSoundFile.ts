import type {PossibleSoundFileExtension, SoundFile} from 'util/file/sound/SoundFile'

export interface NonRepeatableSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends SoundFile<PATH, NAME, EXTENSION, null> {
}
