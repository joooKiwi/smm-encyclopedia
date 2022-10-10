import type {PossibleFileName}       from '../MysteryMushrooms.types';
import type {NonRepeatableSoundFile} from '../../../util/sound/NonRepeatableSoundFile';
import type {PossibleSounds}         from '../sound/Sound';

export interface MysteryMushroomSoundFile<FILE extends PossibleFileName = PossibleFileName, NAME extends PossibleSounds = PossibleSounds, >
    extends NonRepeatableSoundFile<MysteryMushroomSoundPath<FILE>, NAME, MysteryMushroomSoundExtension> {
}

export type MysteryMushroomSoundPath<NAME extends PossibleFileName = PossibleFileName, > = `sound/mystery mushroom/${NAME}`;
export type MysteryMushroomSoundExtension = 'wav';
