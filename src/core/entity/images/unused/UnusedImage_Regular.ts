import type {UnusedImage} from './UnusedImage';
import type {GameStyles}  from '../../../gameStyle/GameStyles';

export interface UnusedImage_Regular
    extends UnusedImage {

    get all(): ReadonlyMap<GameStyles, readonly (readonly string[])[]>;

}
