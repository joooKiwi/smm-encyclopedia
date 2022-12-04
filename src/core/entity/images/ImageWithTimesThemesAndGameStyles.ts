import type {Image}      from 'core/entity/images/Image'
import type {GameStyles} from 'core/gameStyle/GameStyles'
import type {Themes}     from 'core/theme/Themes'
import type {Times}      from 'core/time/Times'

export interface ImageWithTimesThemesAndGameStyles
    extends Image {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly string[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes, time: Times,): readonly string[]


    get(expectEmpty: boolean, theme: Themes,): readonly string[]

    get(expectEmpty: boolean, theme: Themes, time: Times,): readonly string[]


    get(expectEmpty: boolean, time: Times,): readonly string[]

}
