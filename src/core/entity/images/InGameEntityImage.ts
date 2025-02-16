import type {CollectionHolder} from '@joookiwi/collection'

import type {EntityImage}     from 'core/entity/images/EntityImage'
import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameEntityImage<out T extends InGameImageFile = InGameImageFile, >
    extends EntityImage<T> {

    readonly imagesWithAssociation: CollectionHolder<readonly [GameStyles, T,]>

}
