import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {TauntImageFile}      from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

export function tauntImage<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): TauntImageFile<IMAGE_FILE> {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'appeal.0', 'tiff', `${englishName} (taunt image)`,)
}
