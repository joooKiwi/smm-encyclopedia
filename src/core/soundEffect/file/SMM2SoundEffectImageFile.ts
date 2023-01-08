import type {SoundEffectImageName_SMM2} from 'core/soundEffect/SoundEffects.types'
import type {SoundEffectImageFile}      from 'core/soundEffect/file/SoundEffectImageFile'

export interface SMM2SoundEffectImageFile
    extends SoundEffectImageFile<PossibleSMM2ImageFileName> {
}

export type PossibleSMM2ImageFileName = `Lyt_E_P_SE_${SoundEffectImageName_SMM2}`
