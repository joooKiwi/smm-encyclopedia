import type {PossibleFileName}       from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PossibleSounds}         from 'core/mysteryMushroom/sound/Sound'
import type {NonRepeatableSoundFile} from 'util/sound/NonRepeatableSoundFile'

export interface MysteryMushroomSoundFile<FILE extends PossibleFileName = PossibleFileName, NAME extends PossibleSounds = PossibleSounds, >
    extends NonRepeatableSoundFile<MysteryMushroomSoundPath<FILE>, NAME, MysteryMushroomSoundExtension> {
}

export type MysteryMushroomSoundPath<NAME extends PossibleFileName = PossibleFileName, > = `sound/mystery mushroom/${NAME}`
export type MysteryMushroomSoundExtension = 'wav'
