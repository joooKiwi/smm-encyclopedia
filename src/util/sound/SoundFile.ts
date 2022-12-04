import type {BasePath}        from 'variables'
import type {NullOr}          from 'types/nullable'
import type {RepeatableTypes} from 'util/sound/RepeatableTypes'
import type {Time}            from 'util/sound/time/Time'

export interface SoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, REPEATABLE_TIME extends NullOr<Time> = NullOr<Time>, > {

    /** A unique identifier for a sound file */
    get key(): string

    /** The path of the sound file (excluding the {@link BasePath}) */
    get path(): PATH

    /** The path of the sound file (including the {@link BasePath}) */
    get fullPath(): FullPath<PATH>

    /** The file name (without the extension) */
    get name(): NAME

    /** The name of the file with the path & extension. */
    get fullName(): FullName<PATH, NAME, EXTENSION>

    /** The file extension type */
    get extension(): EXTENSION


    /** The repeatable time for the {@link HTMLAudioElement} */
    get repeatableTime(): REPEATABLE_TIME

    /** The repeatable type for an {@link HTMLAudioElement} */
    get repeatableType(): RepeatableTypes

}

export type FullPath<PATH extends string = string, > = `/${BasePath}/${PATH}`
export type FullName<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, > = `${FullPath<PATH>}/${NAME}.${EXTENSION}`

/** The possible extension for a "sound file" in the project */
export type PossibleExtension = 'wav'
