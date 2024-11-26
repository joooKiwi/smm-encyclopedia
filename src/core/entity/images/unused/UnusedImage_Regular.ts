import type {Array} from '@joookiwi/type'

import type {UnusedImageFile} from 'core/entity/file/EntityImageFile'
import type {UnusedImage}     from 'core/entity/images/unused/UnusedImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface UnusedImage_Regular<out T extends UnusedImageFile = UnusedImageFile, >
    extends UnusedImage {

    readonly all: ReadonlyMap<GameStyles, Array<Array<T>>>

}
