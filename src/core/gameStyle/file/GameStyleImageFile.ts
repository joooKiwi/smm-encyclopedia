import type {PossibleEnglishName, PossibleGameAcronym} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                                from 'util/file/image/ImageFile'

export interface GameStyleImageFile
    extends ImageFile<ImageFilePath, PossibleGameStyleImageFileName, ImageFileExtension, PossibleEnglishName> {
}

export type ImageFilePath = 'game style'
export type PossibleGameStyleImageFileName = `${PossibleGameAcronym}_Lyt_Logo_00`
export type ImageFileExtension = 'tiff'
