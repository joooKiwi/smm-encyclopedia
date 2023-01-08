import type {MysteryMushroomSoundFile} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

export interface PowerUpCollectedSoundFile
    extends MysteryMushroomSoundFile<SoundFileName> {

}

export type SoundFileName = 'powerup'
