import type {Array} from '@joookiwi/type'

import type {EntityImage}     from 'core/entity/images/EntityImage'
import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameEntityImage<out T extends InGameImageFile = InGameImageFile, >
    extends EntityImage<T> {

    readonly imagesWithAssociation: Array<readonly [GameStyles, T,]>

}
