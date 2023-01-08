import type {MysteryMushroomSoundFile} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

export interface JumpSoundFile
    extends MysteryMushroomSoundFile<SoundFileName> {
}

export type SoundFileNumber = | '' | 2
export type SoundFileName = `jump${SoundFileNumber}`
