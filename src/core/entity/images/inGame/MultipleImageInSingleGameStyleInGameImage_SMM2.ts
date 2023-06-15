import type {ClassWithEntityEnglishName}                                 from 'core/ClassWithEnglishName'
import type {ImageName_SMM2, ImageType, PossibleInGameSMM2ImageFileName} from 'core/entity/file/InGameSMM2ImageFile'
import type {GameStyles}                                                 from 'core/gameStyle/GameStyles'

import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'

/** A simple {@link InGameImage_SMM2Container} with only 1 {@link GameStyles game style} for multiple images */
export class MultipleImageInSingleGameStyleInGameImage_SMM2
    extends InGameImage_SMM2Container {

    public constructor(gameStyle: GameStyles, entity: ClassWithEntityEnglishName, fileType: ImageType, names: readonly PossibleInGameSMM2ImageFileName[], imageName: ImageName_SMM2,) {
        super(new Map([[gameStyle, names.map(it => new InGameSMM2ImageFileContainer(gameStyle, entity, fileType, it, imageName,),),],],),)
    }

}
