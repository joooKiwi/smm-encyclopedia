import type {PossibleAcronym_InFile} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}              from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link GameStyles} */
export type GameStyleImageFile = ImageFile<'game style', `${PossibleAcronym_InFile}_Lyt_Logo_00`, 'tiff'>
