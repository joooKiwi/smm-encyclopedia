import type {PossibleEnglishName}                                                           from 'core/miiCostume/MiiCostumes.types'
import type {ImageFileExtension, ImageFilePath, MiiCostumeImageFile, PossibleImageFileName} from 'core/miiCostume/file/MiiCostumeImageFile'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class MiiCostumeImageFileContainer
    extends AbstractImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName>
    implements MiiCostumeImageFile {

    public constructor(name: PossibleImageFileName, englishName: PossibleEnglishName,) {
        super('Mii costume', name, 'tiff', englishName,)
    }

}
