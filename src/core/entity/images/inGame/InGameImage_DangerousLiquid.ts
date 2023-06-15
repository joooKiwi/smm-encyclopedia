import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'
import type {LiquidImageFileName}        from 'core/entity/file/InGameSMM2ImageFile'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/** A simple {@link InGameImage_SMM2Container} for the {@link Entities.LAVA lava} & {@link Entities.POISON poison} {@link Entities entity} */
export class InGameImage_DangerousLiquid
    extends InGameImage_SMM2Container {

    public constructor(entity: ClassWithEntityEnglishName, fileName: Exclude<LiquidImageFileName, 'WaterHalf'>,) {
        super(new Map(
            [
                [GameStyles.SUPER_MARIO_BROS, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.0', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.1', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.2', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Object', 'wait.3', fileName,),
                ],],
                [GameStyles.SUPER_MARIO_BROS_3, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'wait.0', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'wait.1', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'wait.2', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Object', 'wait.3', fileName,),
                ],],
                [GameStyles.SUPER_MARIO_WORLD, [
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'wait.0', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'wait.1', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'wait.2', fileName,),
                    new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Object', 'wait.3', fileName,),
                ],],
                //NSMBU is a 3D model
            ],
        ),)
    }

}
