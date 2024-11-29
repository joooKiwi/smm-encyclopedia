import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {DualFileName}     from 'core/mysteryMushroom/file/name/DualFileName'

import {AbstractFileName} from 'core/mysteryMushroom/file/name/AbstractFileName'

export class DualFileNameContainer<const IMAGE_FILE_NAME_1 extends PossibleFileName = PossibleFileName,
    const IMAGE_FILE_NAME_2 extends PossibleFileName = PossibleFileName,
    const SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME_1, >
    extends AbstractFileName<readonly [IMAGE_FILE_NAME_1, IMAGE_FILE_NAME_2,], readonly [SOUND_FILE_NAME,]>
    implements DualFileName<IMAGE_FILE_NAME_1, IMAGE_FILE_NAME_2, SOUND_FILE_NAME> {

    public constructor(imageFile1AndSoundFile: IMAGE_FILE_NAME_1, imageFile2: IMAGE_FILE_NAME_2,)
    public constructor(imageFile1: IMAGE_FILE_NAME_1, imageFile2: IMAGE_FILE_NAME_2, soundFile: SOUND_FILE_NAME,)
    public constructor(imageFile1OrSoundFile: IMAGE_FILE_NAME_1, imageFile2: IMAGE_FILE_NAME_2, soundFile: SOUND_FILE_NAME = imageFile1OrSoundFile as unknown as SOUND_FILE_NAME,) {
        super([imageFile1OrSoundFile, imageFile2,], [soundFile,],)
    }

}
