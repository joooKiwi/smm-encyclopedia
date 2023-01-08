import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {Image}           from 'core/entity/images/Image'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'

export interface ImageWithThemesAndGameStyles<IMAGE_FILE extends EntityImageFile = EntityImageFile, >
    extends Image {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly IMAGE_FILE[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly IMAGE_FILE[]


    get(expectEmpty: boolean, theme: Themes,): readonly IMAGE_FILE[]


    get(expectEmpty: boolean,): readonly IMAGE_FILE[]

}
