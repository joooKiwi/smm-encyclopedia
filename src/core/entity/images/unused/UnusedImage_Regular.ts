import type {UnusedImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage}     from 'core/entity/images/unused/UnusedImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface UnusedImage_Regular<out T extends UnusedImageFile = UnusedImageFile, >
    extends UnusedImage {

    get all(): ReadonlyMap<GameStyles, readonly (readonly T[])[]>

}
