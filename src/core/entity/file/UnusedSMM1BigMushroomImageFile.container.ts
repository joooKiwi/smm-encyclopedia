import type {ClassWithEntityEnglishName}                                                                                                                                                              from 'core/ClassWithEnglishName'
import type {ImageFilePath, ImageIdentifier, ImageNumber, PossibleAmountOfImages, PossibleUnusedBigMushroomImageFallbackName, PossibleUnusedBigMushroomImageFileName, UnusedSMM1BigMushroomImageFile} from 'core/entity/file/UnusedSMM1BigMushroomImageFile'
import type {ImageName_BigMushroom_Unused_SMM1}                                                                                                                                                       from 'core/entity/images/unused/UnusedImage'
import type {Nullable}                                                                                                                                                                                from 'util/types/nullable'

import {AbstractUnusedSMM1ImageFile} from 'core/entity/file/AbstractUnusedSMM1ImageFile'

export class UnusedSMM1BigMushroomImageFileContainer
    extends AbstractUnusedSMM1ImageFile<ImageFilePath, PossibleUnusedBigMushroomImageFileName, PossibleUnusedBigMushroomImageFallbackName>
    implements UnusedSMM1BigMushroomImageFile {

    public constructor(entity: ClassWithEntityEnglishName, name: ImageName_BigMushroom_Unused_SMM1, identifier: ImageIdentifier, number: Nullable<ImageNumber> = null,) {
        super(entity, `M1 A - Enemy - ${name}`,
            number == null ? identifier : `${identifier}.${number}`,
            `Big Mushroom - ${number == null ? identifier : `${identifier} #${number + 1 as PossibleAmountOfImages}` as const}`,
        )
    }

}
