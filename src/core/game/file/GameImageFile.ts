import type {PossibleEnglishName} from 'core/game/Games.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

export interface GameImageFile
    extends ImageFile<ImageFilePath, PossibleEnglishName, ImageFileExtension, PossibleEnglishName> {
}

export type ImageFilePath = 'game'
export type ImageFileExtension = 'svg'