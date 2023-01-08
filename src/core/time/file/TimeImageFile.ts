import type {PossibleSimpleImagePath} from 'core/time/Times.types'
import type {ImageFile}               from 'util/file/image/ImageFile'

export interface TimeImageFile
    extends ImageFile<SoundEffectPath, PossibleSimpleImagePath, SoundEffectExtension> {
}

export type SoundEffectPath = 'time'
export type SoundEffectExtension = 'png'
