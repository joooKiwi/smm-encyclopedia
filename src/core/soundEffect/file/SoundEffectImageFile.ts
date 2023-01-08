import type {PossibleSMM1ImageFileName} from 'core/soundEffect/file/SMM1SoundEffectImageFile'
import type {PossibleSMM2ImageFileName} from 'core/soundEffect/file/SMM2SoundEffectImageFile'
import type {ImageFile}                 from 'util/file/image/ImageFile'
import type {PossibleEnglishName}       from 'core/soundEffect/SoundEffects.types'

export interface SoundEffectImageFile<NAME extends PossibleImageFileName = PossibleImageFileName, >
    extends ImageFile<SoundEffectPath, NAME, ImageFileExtension, PossibleEnglishName> {
}

export type SoundEffectPath = 'sound effect'
export type PossibleImageFileName = | PossibleSMM1ImageFileName | PossibleSMM2ImageFileName
export type ImageFileExtension = 'tiff'
