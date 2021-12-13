import type {GameStyles} from '../../gameStyle/GameStyles';
import type {Themes}     from '../../theme/Themes';
import type {Times}      from '../../time/Times';

export interface EditorImage {


    get(gameStyle: GameStyles,): readonly string[]

    get(gameStyle: GameStyles, theme: Themes,): readonly string[]

    get(gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]


    get(theme: Themes,): readonly string[]

    get(theme: Themes, time: Times,): readonly string[]


    get(time: Times,): readonly string[]


}
