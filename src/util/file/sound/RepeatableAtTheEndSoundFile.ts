import type {RepeatableSoundFile}        from 'util/file/sound/RepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

export interface RepeatableAtTheEndSoundFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends RepeatableSoundFile<PATH, NAME, EXTENSION, null> {
}
