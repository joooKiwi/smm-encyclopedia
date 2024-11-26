import type {PossibleEnglishName} from 'core/game/Games.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link Games} */
export type GameImageFile<T extends PossibleEnglishName = PossibleEnglishName, > = ImageFile<'game', T, 'svg'>
