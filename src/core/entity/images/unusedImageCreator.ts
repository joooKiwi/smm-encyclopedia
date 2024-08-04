import type {ImageName_Unused_SMM1, ImageName_UnusedBigMushroom, ImageName_UnusedSMM1Regular, SimpleImageName_BigMushroom_Unused_SMM1, UnusedSMM1BigMushroomImageFile, UnusedSMM1RegularImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {UnusedImage_BigMushroom}                                                                                                                                                              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                                                                                                                                                                  from 'core/entity/images/unused/UnusedImage_Regular'

import {UnusedEntityImages}               from 'core/entity/UnusedEntityImages'
import * as FileCreator                   from 'core/entity/file/fileCreator'
import {UnusedImage_BigMushroomContainer} from 'core/entity/images/unused/UnusedImage_BigMushroom.container'
import {UnusedImage_RegularContainer}     from 'core/entity/images/unused/UnusedImage_Regular.container'
import {GameStyles}                       from 'core/gameStyle/GameStyles'

export function unusedRegularSMM1Images(entity: UnusedEntityImages, name: ImageName_Unused_SMM1, images: readonly (readonly [GameStyles, readonly ImageName_UnusedSMM1Regular[],])[]): UnusedImage_Regular {
    const size1 = images.length
    const newArray1 = new Array<[GameStyles, [UnusedSMM1RegularImageFile,][],]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const gameStyle = images[index1][0]
        const simpleImages = images[index1][1]

        const size2 = simpleImages.length
        const newArray2 = new Array<[UnusedSMM1RegularImageFile,]>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, simpleImages[index2],),]
        newArray1[index1] = [gameStyle, newArray2,]
    }

    return new UnusedImage_RegularContainer(new Map(newArray1,),)
}

export function unusedRegularInMultipleStyleSMM1Images(entity: UnusedEntityImages, name: ImageName_Unused_SMM1, gameStyles: readonly GameStyles[], fileNames: readonly ImageName_UnusedSMM1Regular[],): UnusedImage_Regular {
    const size1 = gameStyles.length
    const size2 = fileNames.length
    const newArray1 = new Array<[GameStyles, [UnusedSMM1RegularImageFile,][],]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const gameStyle = gameStyles[index1]

        const newArray2 = new Array<[UnusedSMM1RegularImageFile,]>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, fileNames[index2],),]
        newArray1[index1] = [gameStyle, newArray2,]
    }

    return new UnusedImage_RegularContainer(new Map(newArray1,),)
}

export function singleUnusedRegularSMM1Images(entity: UnusedEntityImages, name: ImageName_Unused_SMM1, gameStyle: GameStyles, fileNames: readonly ImageName_UnusedSMM1Regular[],): UnusedImage_Regular {
    const size = fileNames.length
    const newArray = new Array<[UnusedSMM1RegularImageFile,]>(size,)
    let index = size
    while (index-- > 0)
        newArray[index] = [FileCreator.unusedSmm1RegularImage(entity, name, gameStyle, fileNames[index],),]

    return new UnusedImage_RegularContainer(new Map([[gameStyle, newArray,],],),)
}


export function unusedBigMushroomImages(entity: UnusedEntityImages, name: SimpleImageName_BigMushroom_Unused_SMM1, imageNames: readonly (readonly ImageName_UnusedBigMushroom[])[],): UnusedImage_BigMushroom {
    const size1 = imageNames.length
    const newArray1 = new Array<UnusedSMM1BigMushroomImageFile[]>(size1,)
    let index1 = size1
    while (index1-- > 0) {
        const simpleImages = imageNames[index1]

        const size2 = simpleImages.length
        const newArray2 = new Array<UnusedSMM1BigMushroomImageFile>(size2,)
        let index2 = size2
        while (index2-- > 0)
            newArray2[index2] = FileCreator.unusedBigMushroomImage(entity, name, simpleImages[index2],)
        newArray1[index1] = newArray2
    }

    return new UnusedImage_BigMushroomContainer(newArray1,)
}

export function singleUnusedBigMushroomImages(entity: UnusedEntityImages, name: SimpleImageName_BigMushroom_Unused_SMM1, imageName: ImageName_UnusedBigMushroom,): UnusedImage_BigMushroom {
    return new UnusedImage_BigMushroomContainer([[FileCreator.unusedBigMushroomImage(entity, name, imageName,),],],)
}
