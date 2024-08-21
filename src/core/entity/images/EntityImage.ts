import type {Image}           from 'core/entity/images/Image'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import {GameStyles}           from 'core/gameStyle/GameStyles'

export interface EntityImage<out T extends EntityImageFile = EntityImageFile, >
    extends Image {

    readonly images: readonly T[]

    get(gameStyle: GameStyles,): readonly T[]

}
