import type {UnusedSMM1RegularImageFile} from 'core/entity/file/UnusedSMM1RegularImageFile'
import type {UnusedImage}                from 'core/entity/images/unused/UnusedImage'
import type {GameStyles}                 from 'core/gameStyle/GameStyles'

export interface UnusedImage_Regular
    extends UnusedImage {

    get all(): ReadonlyMap<GameStyles, readonly (readonly UnusedSMM1RegularImageFile[])[]>

}
