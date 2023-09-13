import type {PossibleSoundFileExtension, SoundFile} from 'util/file/sound/SoundFile'

export interface NonRepeatableSoundFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends SoundFile<PATH, NAME, EXTENSION, null> {
}
