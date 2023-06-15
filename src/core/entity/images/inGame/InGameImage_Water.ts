import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'

import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/** The {@link InGameImage} for the {@link Entities.WATER water} {@link Entities entity} */
export class InGameImage_Water
    extends InGameImage_SMM2Container {

    public constructor(entity: ClassWithEntityEnglishName,) {
        super(new Map(
            [
                [GameStyles.SUPER_MARIO_BROS, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.0', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.1', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.2', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.3', 'WaterHalf',),
                ],],
                [GameStyles.SUPER_MARIO_BROS_3, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'body.0', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'body.1', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'body.2', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'body.3', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'top.0', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'top.1', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'top.2', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'top.3', 'WaterHalf',),
                ],],
                [GameStyles.SUPER_MARIO_WORLD, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'body.0', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'body.1', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'body.2', 'WaterHalf',),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'body.3', 'WaterHalf',),
                ],],
                //NSMBU is a 3D model
            ],
        ),)
    }

}
