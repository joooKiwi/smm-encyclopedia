import type {FullMusicPathOn}                  from './Music';
import type {Possible_Music}                   from './backgroundMusic/types';
import type {PossibleSoundEffectMusicFileName} from './soundEffect/SoundEffectMusic';

import {BASE_PATH} from '../../variables';

export function createMusicPathOn<T extends Possible_Music | null, >(value: T,): FullMusicPathOn<T>
export function createMusicPathOn<T extends PossibleSoundEffectMusicFileName, >(value: T,): FullMusicPathOn<T>
export function createMusicPathOn(value: PossibleSoundEffectMusicFileName,): FullMusicPathOn<PossibleSoundEffectMusicFileName> {
    return value == null ? null : `/${BASE_PATH}/music/SMM2/${value}.wav`;
}
