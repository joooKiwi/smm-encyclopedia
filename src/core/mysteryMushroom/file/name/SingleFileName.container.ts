import type {PossibleFileName} from '../../MysteryMushrooms.types';
import type {SingleFileName}   from './SingleFileName';

import {AbstractFileName} from './AbstractFileName';

export class SingleFileNameContainer<IMAGE_FILE_NAME extends PossibleFileName, SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME, >
    extends AbstractFileName<readonly [IMAGE_FILE_NAME,], readonly [SOUND_FILE_NAME,]>
    implements SingleFileName<IMAGE_FILE_NAME, SOUND_FILE_NAME> {

    public constructor(file: IMAGE_FILE_NAME,)
    public constructor(imageFile: IMAGE_FILE_NAME, soundFile: SOUND_FILE_NAME,)
    public constructor(imageFileOrFile: IMAGE_FILE_NAME, soundFile?: SOUND_FILE_NAME,) {
        const imageFiles = [imageFileOrFile,] as const;
        const soundFiles = soundFile == null ? imageFiles : [soundFile,] as const;
        super(imageFiles, soundFiles as readonly [SOUND_FILE_NAME,],);
    }

}
