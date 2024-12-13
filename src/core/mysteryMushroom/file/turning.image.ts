import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {TurningImageFile}    from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

export function turningImage<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): TurningImageFile<IMAGE_FILE> {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'turn.0', 'tiff', `${englishName} (turning image)`,)
}
