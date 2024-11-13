import type {Array} from '@joookiwi/type'

import type {Image}           from 'core/entity/images/Image'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface EntityImage<out T extends EntityImageFile = EntityImageFile, >
    extends Image {

    readonly images: Array<T>

    get(gameStyle: GameStyles,): Array<T>

}
