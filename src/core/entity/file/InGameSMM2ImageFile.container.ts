import type {ImageFilePath, ImageName_SMM2, ImageType, InGameSMM2ImageFile, PossibleInGameSMM2ImageFallbackName, PossibleInGameSMM2ImageFileName} from 'core/entity/file/InGameSMM2ImageFile'
import type {ClassWithEntityEnglishName}                                                                                                          from 'core/ClassWithEnglishName'
import type {GameStyles}                                                                                                                          from 'core/gameStyle/GameStyles'

import {AbstractEntityImageFile} from 'core/entity/file/AbstractEntityImageFile'

export class InGameSMM2ImageFileContainer
    extends AbstractEntityImageFile<ImageFilePath, PossibleInGameSMM2ImageFileName, 'tiff', PossibleInGameSMM2ImageFallbackName>
    implements InGameSMM2ImageFile {

    public constructor(gameStyle: GameStyles, entity: ClassWithEntityEnglishName, fileType: ImageType, name: PossibleInGameSMM2ImageFileName, imageName: ImageName_SMM2,) {
        super(entity, `in game/${gameStyle.gameAcronym} ${fileType} - ${imageName}`, name, 'tiff', 'In game - SMM2',)
    }

}
