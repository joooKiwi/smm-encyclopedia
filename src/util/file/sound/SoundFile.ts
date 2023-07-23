import type {File}            from 'util/file/File'
import type {RepeatableTypes} from 'util/file/sound/RepeatableTypes'
import type {Time}            from 'util/file/sound/time/Time'

export interface SoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, >
    extends File<PATH, NAME, EXTENSION> {

    /** The repeatable time for the {@link HTMLAudioElement} */
    get repeatableTime(): REPEATABLE_TIME

    /** The repeatable type for an {@link HTMLAudioElement} */
    get repeatableType(): RepeatableTypes

}

/** The possible extension for a "sound file" in the project */
export type PossibleSoundFileExtension = 'wav'
