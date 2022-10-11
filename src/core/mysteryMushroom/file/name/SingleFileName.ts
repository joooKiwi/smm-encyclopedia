import type {FileName}         from './FileName'
import type {PossibleFileName} from '../../MysteryMushrooms.types'

export interface SingleFileName<IMAGE_FILE_NAME extends PossibleFileName = PossibleFileName, SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME, >
    extends FileName<readonly [IMAGE_FILE_NAME,], readonly [SOUND_FILE_NAME,]> {
}
