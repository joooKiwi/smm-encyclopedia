import type {ClassWithEntityEnglishName}                                 from 'core/ClassWithEnglishName'
import type {ImageName_SMM2, ImageType, PossibleInGameSMM2ImageFileName} from 'core/entity/file/InGameSMM2ImageFile'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/**
 * A simple {@link InGameImage_SMM2Container} with only 1 image for the 2D style
 *  ({@link GameStyles.SUPER_MARIO_BROS SMB}, {@link GameStyles.SUPER_MARIO_BROS_3 SMB3}, {@link GameStyles.SUPER_MARIO_WORLD SMW} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U NSMBU})
 */
export class SingleImageIn2DStyleInGameImage_SMM2
    extends InGameImage_SMM2Container {

    public constructor(entity: ClassWithEntityEnglishName, fileType: ImageType, name: PossibleInGameSMM2ImageFileName, imageName: ImageName_SMM2,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, fileType, name, imageName,),],],
            [GameStyles.SUPER_MARIO_BROS_3, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, fileType, name, imageName,),],],
            [GameStyles.SUPER_MARIO_WORLD, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, fileType, name, imageName,),],],
            [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(GameStyles.NEW_SUPER_MARIO_BROS_U, entity, fileType, name, imageName,),],],
        ],),)
    }
}