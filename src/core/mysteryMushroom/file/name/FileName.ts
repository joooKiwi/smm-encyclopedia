import type {PossibleFileName} from 'core/mysteryMushroom/MysteryMushrooms.types'

export interface FileName<out IMAGE_FILE_NAMES extends PossibleImageFileNames = PossibleImageFileNames,
    out SOUND_FILE_NAME extends PossibleSoundFileNames = PossibleSoundFileNames, > {

    get imageFileNames(): IMAGE_FILE_NAMES

    get soundFileName(): SOUND_FILE_NAME

}

export type PossibleSoundFileNames = | EmptyArray | readonly [PossibleFileName,]
export type PossibleImageFileNames = | EmptyArray | readonly [PossibleFileName,] | readonly [PossibleFileName, PossibleFileName,]
