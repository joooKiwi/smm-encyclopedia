import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {JumpImageFile}       from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

export function tripleJumpImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<JumpImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.0`, 'tiff', `${englishName} (jump image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.1`, 'tiff', `${englishName} (jump image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.2`, 'tiff', `${englishName} (jump image #3)`,),
    ],)
}
