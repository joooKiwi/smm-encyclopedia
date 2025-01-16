import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {InGameImage}     from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage_Regular<out T extends InGameImageFile = InGameImageFile, >
    extends InGameImage {

    readonly images: CollectionHolder<T>
    readonly imagesWithAssociation: CollectionHolder<readonly [GameStyles, T,]>

    get(gameStyle: GameStyles,): CollectionHolder<T>

}
