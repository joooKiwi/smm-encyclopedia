import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/** The {@link InGameImage} for the {@link Entities.MORTON_GROUND_PROJECTILE morton fire} {@link Entities entity} */
export class InGameImage_MortonFire
    extends InGameImage_SMM2Container {

    constructor(entity: ClassWithEntityEnglishName,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'fire.0', 'Morton',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'fire.1', 'Morton',),
            ],],
            [GameStyles.SUPER_MARIO_BROS_3, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'fire.0', 'Morton',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'fire.1', 'Morton',),
                //Has unused fire.2 for SMB3
            ],],
            [GameStyles.SUPER_MARIO_WORLD, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'fire.0', 'Morton',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'fire.1', 'Morton',),
            ],],
            // [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(GameStyles.NEW_SUPER_MARIO_BROS_U, entity, 'Enemy', '', 'Morton',),],],
        ],),)
    }
}