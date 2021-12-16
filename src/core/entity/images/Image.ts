import type {GameStyles} from '../../gameStyle/GameStyles';
import type {Themes}     from '../../theme/Themes';
import type {Times}      from '../../time/Times';

export interface Image {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]


    get(expectEmpty: boolean, theme: Themes,): readonly string[]

    get(expectEmpty: boolean, theme: Themes, time: Times,): readonly string[]


    get(expectEmpty: boolean, time: Times,): readonly string[]

}
