import type {PossibleEnglishName}   from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PressingDownImageFile} from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

export function pressingDownImage<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): PressingDownImageFile<IMAGE_FILE> {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'stoop.0', 'tiff', `${englishName} (pressing ↓ image)`,)
}
