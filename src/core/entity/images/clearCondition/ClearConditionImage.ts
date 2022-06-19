import type {Image}      from '../Image';
import type {GameStyles} from '../../../gameStyle/GameStyles';

export interface ClearConditionImage
    extends Image {

    get(gameStyle: GameStyles,): readonly string[]

}
