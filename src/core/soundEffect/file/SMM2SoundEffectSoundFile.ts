import type {PossibleSoundEffectSoundName_SMM1} from '../sound/types';
import type {SoundEffectSoundFile}              from './SoundEffectSoundFile';

export interface SMM1SoundEffectSoundFile<NAME extends PossibleSoundEffectSoundName_SMM1, >
    extends SoundEffectSoundFile<SMM1SoundFilePath, NAME> {
}

export type SMM1SoundFilePath = 'sound/sound effect/SMM1';
