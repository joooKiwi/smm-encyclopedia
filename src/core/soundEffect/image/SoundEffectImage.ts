import type {PossibleImagePath_SMM1, PossibleImagePath_SMM2, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from '../SoundEffects.types';

export interface SoundEffectImage {

    get SMM1ImagePath(): PossibleSMM1ImagePath

    get SMM2ImagePath(): PossibleSMM2ImagePath

}

export type PossibleSMM1ImagePathReceived = | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,] | null;
export type PossibleSMM1ImagePath = | readonly [PossibleImagePath_SMM1,] | readonly [PossibleImagePath_SMM1, PossibleImagePath_SMM1,] | null;

export type PossibleSMM2ImagePathReceived = SoundEffectImageName_SMM2 | null;
export type PossibleSMM2ImagePath = | PossibleImagePath_SMM2 | null;
