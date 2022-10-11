import type {PossibleFileName} from '../../MysteryMushrooms.types'

export interface FileName<IMAGE_FILE_NAMES extends PossibleImageFileNames = PossibleImageFileNames, SOUND_FILE_NAME extends PossibleSoundFileNames = PossibleSoundFileNames, > {

    get imageFileNames(): IMAGE_FILE_NAMES

    get soundFileName(): SOUND_FILE_NAME

}

export type PossibleSoundFileNames = | readonly [] | readonly [PossibleFileName,]
export type PossibleImageFileNames = | readonly [] | readonly [PossibleFileName,] | readonly [PossibleFileName, PossibleFileName,]
