import type {PossibleEnglishName}        from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {FallingAfterAJumpImageFile} from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'
import {SimpleImageFile}                 from 'util/file/image/SimpleImageFile'

export function fallingAfterAJumpImage<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): FallingAfterAJumpImageFile<IMAGE_FILE> {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'jump_fall.0', 'tiff', `${englishName} (falling after a jump image)`,)
}
