import type {FileName}         from './FileName';
import type {PossibleFileName} from '../../MysteryMushrooms.types';

export interface SingleJoinedFileName<FILE_NAME extends PossibleFileName = PossibleFileName, >
    extends FileName<readonly [FILE_NAME,], readonly [FILE_NAME,]> {
}
