import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {InGameImage}     from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage_Regular<out T extends InGameImageFile = InGameImageFile, >
    extends InGameImage {

    readonly images: CollectionHolder<T>
    readonly imagesWithAssociation: CollectionHolder<readonly [GameStyles, T,]>

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
