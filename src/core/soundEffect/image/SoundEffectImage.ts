import type {NullOr}                                                                      from '../../../util/types'
import type {PossibleImagePath_SMM1, PossibleImagePath_SMM2, SoundEffectImageNumber_SMM1} from '../SoundEffects.types'

export interface SoundEffectImage {

    get SMM1ImagePath(): PossibleSMM1ImagePath

    get SMM2ImagePath(): NullOr<PossibleImagePath_SMM2>

}

export type PossibleSMM1ImagePathReceived = NullOr<| SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,]>
export type PossibleSMM1ImagePath = NullOr<| readonly [PossibleImagePath_SMM1,] | readonly [PossibleImagePath_SMM1, PossibleImagePath_SMM1,]>
