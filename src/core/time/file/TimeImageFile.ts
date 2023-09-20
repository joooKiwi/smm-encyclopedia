import type {PossibleSimpleImagePath} from 'core/time/Times.types'
import type {ImageFile}               from 'util/file/image/ImageFile'

/** A simple {@link ImageFile} made to be related to a {@link Times} */
export type TimeImageFile = ImageFile<SoundEffectPath, PossibleSimpleImagePath, SoundEffectExtension>


export type SoundEffectPath = 'time'
export type SoundEffectExtension = 'png'
