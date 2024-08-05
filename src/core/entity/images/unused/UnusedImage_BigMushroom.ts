import type {UnusedSMM1BigMushroomImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage}                    from 'core/entity/images/unused/UnusedImage'

/**
 * An unused {@link Entities.BIG_MUSHROOM_CLASSIC} or {@link Entities.BIG_MUSHROOM_MODERN}
 * image for some specific entities.
 *
 * It can only be from a {@link Entities.KOOPA_CLOWN_CAR}, {@link Entities.GOOMBA} or {@link Entities.STRETCH}.
 *
 * It is also only applicable in the {@link GameStyles.SUPER_MARIO_BROS "Super Mario Bros." game style}
 * as well as only in the {@link Games.SUPER_MARIO_MAKER_1 "Super Mario Maker" game}.
 */
export interface UnusedImage_BigMushroom
    extends UnusedImage {

    get all(): readonly UnusedSMM1BigMushroomImageFile[]

}
