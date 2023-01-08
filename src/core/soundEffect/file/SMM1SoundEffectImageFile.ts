import type {SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SoundEffectImageFile}        from 'core/soundEffect/file/SoundEffectImageFile'

export interface SMM1SoundEffectImageFile
    extends SoundEffectImageFile<PossibleSMM1ImageFileName> {
}

export type PossibleSMM1ImageFileName = `Edit_Lyt_P_SE${SoundEffectImageNumber_SMM1}`
