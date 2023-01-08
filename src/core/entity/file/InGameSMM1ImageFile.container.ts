import type {ClassWithEntityEnglishName}                                                                               from 'core/ClassWithEnglishName'
import type {ImageFilePath, InGameSMM1ImageFile, PossibleInGameSMM1ImageFallbackName, PossibleInGameSMM1ImageFileName} from 'core/entity/file/InGameSMM1ImageFile'
import type {ImageName_SMM1}                                                                                           from 'core/entity/images/inGame/InGameImage_SMM1.types'
import type {GameStyles}                                                                                               from 'core/gameStyle/GameStyles'

import {AbstractEntityImageFile} from 'core/entity/file/AbstractEntityImageFile'

export class InGameSMM1ImageFileContainer
    extends AbstractEntityImageFile<ImageFilePath, PossibleInGameSMM1ImageFileName, 'png', PossibleInGameSMM1ImageFallbackName>
    implements InGameSMM1ImageFile {


    public constructor(gameStyle: GameStyles, entity: ClassWithEntityEnglishName, imageName: ImageName_SMM1,) {
        super(entity, `${gameStyle.shortImagePath}/In game/SMM1/Item - ${imageName}/`, 'wait.0', 'png', 'In game - SMM1',)
    }

}
