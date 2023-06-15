import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/** The {@link InGameImage} for the {@link Entities.CANDY_RING_THROWN_BY_A_WENDY candy ring} {@link Entities entity} */
export class InGameImage_CandyRing
    extends InGameImage_SMM2Container {

    constructor(entity: ClassWithEntityEnglishName,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'ring.0', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'ring.1', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'ring.2', 'Wendy',),
            ],],
            [GameStyles.SUPER_MARIO_BROS_3, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'ring.0', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'ring.1', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'ring.2', 'Wendy',),
            ],],
            [GameStyles.SUPER_MARIO_WORLD, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'ring.0', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'ring.1', 'Wendy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'ring.2', 'Wendy',),
            ],],
            // [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(GameStyles.NEW_SUPER_MARIO_BROS_U, entity, 'Enemy', '', 'Wendy',),],],
        ],),)
    }
}