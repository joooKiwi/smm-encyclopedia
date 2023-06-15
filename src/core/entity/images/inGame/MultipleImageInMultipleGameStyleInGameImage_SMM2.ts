import type {ClassWithEntityEnglishName}                                 from 'core/ClassWithEnglishName'
import type {ImageName_SMM2, ImageType, PossibleInGameSMM2ImageFileName} from 'core/entity/file/InGameSMM2ImageFile'
import type {GameStyles}                                                 from 'core/gameStyle/GameStyles'

import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'

/** A simple {@link InGameImage_SMM2Container} with only multiple {@link GameStyles game styles} for multiple images */
export class MultipleImageInMultipleGameStyleInGameImage_SMM2
    extends InGameImage_SMM2Container {
    public constructor(gameStyles: readonly GameStyles[], entity: ClassWithEntityEnglishName, fileType: ImageType, names: readonly PossibleInGameSMM2ImageFileName[], imageName: ImageName_SMM2,) {
        super(new Map(gameStyles.map(gameStyle =>
            [gameStyle, names.map(it => new InGameSMM2ImageFileContainer(gameStyle, entity, fileType, it, imageName,),),],
        ),),)
    }

}
