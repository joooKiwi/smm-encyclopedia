import type {CollectionHolder} from '@joookiwi/collection'

import type {UnusedImageFile} from 'core/entity/file/EntityImageFile'
import type {UnusedImage}     from 'core/entity/images/unused/UnusedImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface UnusedImage_Regular<out T extends UnusedImageFile = UnusedImageFile, >
    extends UnusedImage {

    readonly images: CollectionHolder<T>
    readonly imagesWithAssociation: CollectionHolder<readonly [GameStyles, T,]>

    get(gameStyle: GameStyles,): CollectionHolder<T>

}
