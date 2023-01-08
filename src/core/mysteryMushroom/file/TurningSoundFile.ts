import type {MysteryMushroomSoundFile} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

export interface TurningSoundFile
    extends MysteryMushroomSoundFile<SoundFileName> {
}

export type SoundFileName = 'slip'
