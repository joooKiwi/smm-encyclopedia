import type {Array} from '@joookiwi/type'

import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {Image}           from 'core/entity/images/Image'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage<out T extends InGameImageFile = InGameImageFile, >
    extends Image {

    readonly images: Array<T>
    readonly imagesWithAssociation: Array<readonly [GameStyles, T,]>

    get(gameStyle: GameStyles,): Array<T>

}
