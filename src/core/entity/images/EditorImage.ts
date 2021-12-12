import type {GameStyles} from '../../gameStyle/GameStyles';
import type {Themes}     from '../../theme/Themes';
import type {Times}           from '../../time/Times';

export interface EditorImage {

    get(time: Times, gameStyle: GameStyles, theme: Themes,): readonly string[]

}
