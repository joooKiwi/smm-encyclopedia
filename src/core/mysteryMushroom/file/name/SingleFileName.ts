import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {FileName}         from 'core/mysteryMushroom/file/name/FileName'

export interface SingleFileName<IMAGE_FILE_NAME extends PossibleFileName = PossibleFileName, SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME, >
    extends FileName<readonly [IMAGE_FILE_NAME,], readonly [SOUND_FILE_NAME,]> {}
