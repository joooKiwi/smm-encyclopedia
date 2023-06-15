import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {KoopalingImageFileName}     from 'core/entity/file/InGameSMM2ImageFile'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/**
 * The {@link InGameImage} for any koopaling general projectile ({@link Entities.LARRY_PROJECTILE Larry},
 * {@link Entities.IGGY_PROJECTILE Iggy}, {@link Entities.WENDY_PROJECTILE Wendy (unused)}, {@link Entities.LEMMY_PROJECTILE Lemmy (unused)},
 * {@link Entities.ROY_PROJECTILE Roy}, {@link Entities.MORTON_THROWN_PROJECTILE Morton} & {@link Entities.LUDWIG_PROJECTILE Ludwig})
 * {@link Entities entity}
 */
export class InGameImage_KoopalingProjectile
    extends InGameImage_SMM2Container {

    public constructor(entity: ClassWithEntityEnglishName, fileName: KoopalingImageFileName,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'effect.0', fileName,),],],
            [GameStyles.SUPER_MARIO_BROS_3, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'effect.0', fileName,),],],
            [GameStyles.SUPER_MARIO_WORLD, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'effect.0', fileName,),],],
        ],),)
    }

}
