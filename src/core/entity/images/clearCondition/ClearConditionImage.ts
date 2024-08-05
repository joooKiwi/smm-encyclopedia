import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile.clearCondition'
import type {Image}                   from 'core/entity/images/Image'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export interface ClearConditionImage
    extends Image {

    get map(): ReadonlyMap<GameStyles, ClearConditionImageFile>

    get(gameStyle: GameStyles,): ClearConditionImageFile

}
