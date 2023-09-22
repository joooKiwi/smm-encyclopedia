import type {PossibleEnglishName} from 'core/game/Games.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

/** A simple {@link ImageFile} made to be related to a {@link Games} */
export type GameImageFile = ImageFile<'game', PossibleEnglishName, 'svg'>
