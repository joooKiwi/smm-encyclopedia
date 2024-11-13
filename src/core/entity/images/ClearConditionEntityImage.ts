import type {Array} from '@joookiwi/type'

import type {EntityImage}             from 'core/entity/images/EntityImage'
import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

export interface ClearConditionEntityImage<out T extends ClearConditionImageFile = ClearConditionImageFile, >
    extends EntityImage<T> {

    readonly imagesWithAssociation: Array<readonly [GameStyles, T,]>

}
