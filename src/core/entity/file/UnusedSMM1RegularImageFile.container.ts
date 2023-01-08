import type {ClassWithEntityEnglishName}                                                                                                                                                             from 'core/ClassWithEnglishName'
import type {ImageFilePath, ImageIdentifier, ImageNumber, ImageType, PossibleAmountOfImages, PossibleUnusedRegularImageFallbackName, PossibleUnusedRegularImageFileName, UnusedSMM1RegularImageFile} from 'core/entity/file/UnusedSMM1RegularImageFile'
import type {ImageName_Unused_SMM1}                                                                                                                                                                  from 'core/entity/images/unused/UnusedImage'
import type {GameStyles}                                                                                                                                                                             from 'core/gameStyle/GameStyles'
import type {PossibleGameAcronym_SMM1}                                                                                                                                                               from 'core/gameStyle/GameStyles.types'

import {AbstractUnusedSMM1ImageFile} from 'core/entity/file/AbstractUnusedSMM1ImageFile'

export class UnusedSMM1RegularImageFileContainer
    extends AbstractUnusedSMM1ImageFile<ImageFilePath, PossibleUnusedRegularImageFileName, PossibleUnusedRegularImageFallbackName>
    implements UnusedSMM1RegularImageFile {

    public constructor(entity: ClassWithEntityEnglishName, gameStyle: GameStyles, name: ImageName_Unused_SMM1, type: ImageType, identifier: ImageIdentifier, number: ImageNumber,) {
        super(entity,
            `${gameStyle.gameAcronym as PossibleGameAcronym_SMM1} ${type} - ${name}`,
            `${identifier}.${number}`,
            `${identifier} #${(typeof number == 'string' ? Number(number[2]) : number) + 1 as PossibleAmountOfImages}`,
        )
    }

}
