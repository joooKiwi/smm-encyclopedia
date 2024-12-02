import type {CollectionHolder}                from '@joookiwi/collection'

import type {InGameImage}                     from 'core/entity/images/inGame/InGameImage'
import type {InGameSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'

/**
 * A Big Mushroom ({@link Entities.BIG_MUSHROOM_CLASSIC classic} / {@link Entities.BIG_MUSHROOM_MODERN modern})
 * in {@link SMB} only for {@link SMM1}
 */
export interface InGameImage_BigMushroom<out T extends InGameSmm1ImageFile_BigMushroom = InGameSmm1ImageFile_BigMushroom, >
    extends InGameImage {

    readonly images: CollectionHolder<T>

}
