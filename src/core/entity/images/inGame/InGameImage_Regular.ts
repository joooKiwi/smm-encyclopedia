import type {Array} from '@joookiwi/type'

import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {InGameImage}     from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage_Regular<out T extends InGameImageFile = InGameImageFile, >
    extends InGameImage {

    readonly images: Array<T>
    readonly imagesWithAssociation: Array<readonly [GameStyles, T,]>

    get(gameStyle: GameStyles,): Array<T>

}
