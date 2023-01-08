import type {Image}                   from 'core/entity/images/Image'
import type {ClearConditionImageFile} from 'core/entity/file/ClearConditionImageFile'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export interface ClearConditionImage
    extends Image {

    get(gameStyle: GameStyles,): readonly ClearConditionImageFile[]

}
