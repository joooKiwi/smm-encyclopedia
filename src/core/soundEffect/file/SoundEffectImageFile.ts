import type {SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {ImageFile}                                              from 'util/file/image/ImageFile'

/** An {@link ImageFile} made to be related to a {@link SoundEffects} */
export type SoundEffectImageFile = | SMM1SoundEffectImageFile | SMM2SoundEffectImageFile


export type SMM1SoundEffectImageFile = ImageFile<'sound effect', `Edit_Lyt_P_SE${SoundEffectImageNumber_SMM1}`, 'tiff'>
export type SMM2SoundEffectImageFile = ImageFile<'sound effect', `Lyt_E_P_SE_${SoundEffectImageName_SMM2}`, 'tiff'>
