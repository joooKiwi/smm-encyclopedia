import type {UnusedSmm1ImageFile_BigMushroom} from 'core/entity/file/EntityImageFile'
import type {UnusedImage}                     from 'core/entity/images/unused/UnusedImage'

/**
 * An {@link UnusedImage} Big Mushroom ({@link Entities.BIG_MUSHROOM_CLASSIC classic} / {@link Entities.BIG_MUSHROOM_MODERN modern})
 * in {@link GameStyles.SUPER_MARIO_BROS SMB} only for {@link Games.SUPER_MARIO_MAKER_1 SMM1}
 */
export interface UnusedImage_BigMushroom<out T extends UnusedSmm1ImageFile_BigMushroom = UnusedSmm1ImageFile_BigMushroom, >
    extends UnusedImage {

    readonly all: readonly T[]

}
