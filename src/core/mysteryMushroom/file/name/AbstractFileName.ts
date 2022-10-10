import type {FileName, PossibleImageFileNames, PossibleSoundFileNames} from './FileName';

export class AbstractFileName<IMAGE_FILE_NAMES extends PossibleImageFileNames, SOUND_FILE_NAME extends PossibleSoundFileNames, >
    implements FileName<IMAGE_FILE_NAMES, SOUND_FILE_NAME> {

    //region -------------------- Fields --------------------

    readonly #imageFileNames;
    readonly #soundFileName;

    //endregion -------------------- Fields --------------------

    public constructor(imageFiles: IMAGE_FILE_NAMES, soundFile: SOUND_FILE_NAME,) {
        this.#imageFileNames = imageFiles;
        this.#soundFileName = soundFile;
    }

    //region -------------------- Getter methods --------------------


    public get imageFileNames(): IMAGE_FILE_NAMES {
        return this.#imageFileNames;
    }

    public get soundFileName(): SOUND_FILE_NAME {
        return this.#soundFileName;
    }

    //endregion -------------------- Getter methods --------------------

}
