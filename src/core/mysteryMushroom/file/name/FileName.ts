import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {EmptyArray}       from 'util/types/variables'

export interface FileName<IMAGE_FILE_NAMES extends PossibleImageFileNames = PossibleImageFileNames, SOUND_FILE_NAME extends PossibleSoundFileNames = PossibleSoundFileNames, > {

    get imageFileNames(): IMAGE_FILE_NAMES

    get soundFileName(): SOUND_FILE_NAME

}

export type PossibleSoundFileNames = | EmptyArray | readonly [PossibleFileName,]
export type PossibleImageFileNames = | EmptyArray | readonly [PossibleFileName,] | readonly [PossibleFileName, PossibleFileName,]
