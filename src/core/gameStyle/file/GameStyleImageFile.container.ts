import type {GameStyleImageFile, ImageFileExtension, ImageFilePath, PossibleGameStyleImageFileName} from 'core/gameStyle/file/GameStyleImageFile'
import type {PossibleEnglishName, PossibleGameAcronym}                                              from 'core/gameStyle/GameStyles.types'

import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class GameStyleImageFileContainer
    extends AbstractImageFile<ImageFilePath, PossibleGameStyleImageFileName, ImageFileExtension, PossibleEnglishName>
    implements GameStyleImageFile {

    public constructor(englishName: PossibleEnglishName, gameAcronym: PossibleGameAcronym,) {
        super('game style', `${gameAcronym}_Lyt_Logo_00`, 'tiff', englishName,)
    }

}