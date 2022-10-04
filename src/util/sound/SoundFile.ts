import type {BasePath} from '../../variables';

export interface SoundFile<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension,
    IS_REPEATABLE extends boolean = boolean,> {

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


    /** The file is repeatable (at the end or in a possible time of an {@link HTMLAudioElement}) */
    get isRepeatable(): IS_REPEATABLE

}

export type FullPath<PATH extends string = string, > = `${BasePath}/${PATH}`;
export type FullName<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, > = `${FullPath<PATH>}/${NAME}.${EXTENSION}`;

/** The possible extension for a "sound file" in the project */
export type PossibleExtension = 'wav';
