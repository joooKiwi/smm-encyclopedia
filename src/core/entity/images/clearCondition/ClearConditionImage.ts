import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {Image}                    from 'core/entity/images/Image'
import type {GameStyles}               from 'core/gameStyle/GameStyles'

export interface ClearConditionImage<out T extends ClearConditionImageFile = ClearConditionImageFile, >
    extends Image {

    get map(): ReadonlyMap<GameStyles, T>

    get(gameStyle: GameStyles,): T

}
