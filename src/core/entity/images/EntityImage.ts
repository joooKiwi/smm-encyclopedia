import type {CollectionHolder} from '@joookiwi/collection'

import type {Image}           from 'core/entity/images/Image'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface EntityImage<out T extends EntityImageFile = EntityImageFile, >
    extends Image {

    readonly images: CollectionHolder<T>

    get(gameStyle: GameStyles,): CollectionHolder<T>

    /** An alias method to {@link get}({@link SMB}) */
    getSmb(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SMB3}) */
    getSmb3(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SMW}) */
    getSmw(): CollectionHolder<T>

    /** An alias method to {@link get}({@link NSMBU}) */
    getNsmbu(): CollectionHolder<T>

    /** An alias method to {@link get}({@link SM3DW}) */
    getSm3dw(): CollectionHolder<T>

}
