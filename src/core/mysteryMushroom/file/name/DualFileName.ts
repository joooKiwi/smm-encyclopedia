import type {FileName}         from './FileName';
import type {PossibleFileName} from '../../MysteryMushrooms.types';

export interface DualFileName<IMAGE_FILE_NAME_1 extends PossibleFileName = PossibleFileName, IMAGE_FILE_NAME_2 extends PossibleFileName = PossibleFileName, SOUND_FILE_NAME extends PossibleFileName = IMAGE_FILE_NAME_1, >
    extends FileName<readonly [IMAGE_FILE_NAME_1, IMAGE_FILE_NAME_2,], readonly [SOUND_FILE_NAME,]> {
}
