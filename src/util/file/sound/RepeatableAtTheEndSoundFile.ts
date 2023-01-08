import type {RepeatableSoundFile}        from 'util/file/sound/RepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

export interface RepeatableAtTheEndSoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, null> {
}
