import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {KoopalingImageFileName}     from 'core/entity/file/InGameSMM2ImageFile'

import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/**
 * The {@link InGameImage} for any koopaling wand ({@link Entities.LARRY_WAND Larry},
 * {@link Entities.IGGY_WAND Iggy}, {@link Entities.WENDY_WAND Wendy}, {@link Entities.LEMMY_WAND Lemmy},
 * {@link Entities.ROY_WAND Roy}, {@link Entities.MORTON_WAND Morton} & {@link Entities.LUDWIG_WAND Ludwig})
 * {@link Entities entity}
 */
export class InGameImage_KoopalingWand
    extends InGameImage_SMM2Container {

    public constructor(entity: ClassWithEntityEnglishName, fileName: KoopalingImageFileName,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'wand', fileName,),],],
            [GameStyles.SUPER_MARIO_BROS_3, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'wand', fileName,),],],
            [GameStyles.SUPER_MARIO_WORLD, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'wand', fileName,),],],
            // [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(GameStyles.NEW_SUPER_MARIO_BROS_U, entity, 'Enemy', `${fileName.toLowercase()}_magic_wand`, fileName,),],],
        ],),)
    }

}
