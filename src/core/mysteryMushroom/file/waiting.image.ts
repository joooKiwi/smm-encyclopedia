import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {WaitingImageFile}    from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

export function waitingImage<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): WaitingImageFile<IMAGE_FILE> {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'wait.0', 'tiff', `${englishName} (waiting image)`,)
}
