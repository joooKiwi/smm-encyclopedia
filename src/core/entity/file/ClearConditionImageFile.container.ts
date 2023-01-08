import type {ClassWithEntityEnglishName}                                                                                           from 'core/ClassWithEnglishName'
import type {ClearConditionImageFile, ImageFilePath, PossibleClearConditionImageFallbackName, PossibleClearConditionImageFileName} from 'core/entity/file/ClearConditionImageFile'
import type {ImageNumber, PossibleAmountOfImages, SimpleImageName}                                                                 from 'core/entity/images/clearCondition/ClearConditionImage.types'
import type {GameStyles}                                                                                                           from 'core/gameStyle/GameStyles'
import type {Nullable}                                                                                                             from 'util/types/nullable'

import {AbstractEntityImageFile} from 'core/entity/file/AbstractEntityImageFile'

export class ClearConditionImageFileContainer
    extends AbstractEntityImageFile<ImageFilePath, PossibleClearConditionImageFileName, 'tiff', PossibleClearConditionImageFallbackName>
    implements ClearConditionImageFile {

    public constructor(gameStyle: GameStyles, entity: ClassWithEntityEnglishName, name: NonNullable<SimpleImageName>, imageNumber: Nullable<ImageNumber>,) {
        super(entity,
            `${gameStyle.shortImagePath}/Clear Condition/`,
            `${gameStyle.gameAcronym}_Lyt_M_${name}_0${imageNumber ?? 0}`,
            'tiff',
            imageNumber == null ? 'Clear condition' : `Clear condition #${imageNumber + 1 as PossibleAmountOfImages}`,
        )
    }

}
