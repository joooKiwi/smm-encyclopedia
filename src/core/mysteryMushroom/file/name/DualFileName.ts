import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {FileName}         from 'core/mysteryMushroom/file/name/FileName'

export interface DualFileName<out IMAGE_FILE_NAME_1 extends PossibleFileName = PossibleFileName,
    out IMAGE_FILE_NAME_2 extends PossibleFileName = PossibleFileName,
    out SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME_1, >
    extends FileName<readonly [IMAGE_FILE_NAME_1, IMAGE_FILE_NAME_2,], readonly [SOUND_FILE_NAME,]> {}
