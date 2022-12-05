import type {Image}      from 'core/entity/images/Image'
import type {GameStyles} from 'core/gameStyle/GameStyles'
import type {Themes}     from 'core/theme/Themes'

export interface ImageWithThemesAndGameStyles
    extends Image {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]


    get(expectEmpty: boolean, theme: Themes,): readonly string[]


    get(expectEmpty: boolean,): readonly string[]

}
