import type {GameStyles} from '../../gameStyle/GameStyles';
import type {Image}      from './Image';
import type {Themes}     from '../../theme/Themes';

export interface ImageWithThemesAndGameStyles
    extends Image {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]


    get(expectEmpty: boolean, theme: Themes,): readonly string[]


    get(expectEmpty: boolean,): readonly string[]

}
