import type {InGameImageFile} from 'core/entity/file/EntityImageFile.inGame'
import type {Image}           from 'core/entity/images/Image'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage<out IMAGE_FILE extends InGameImageFile = InGameImageFile, >
    extends Image {

    get(gameStyle: GameStyles,): readonly IMAGE_FILE[]

}
