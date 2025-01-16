import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile}   from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

/** Create 2 climbing images */
export function climbingImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<ClimbingImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'climb.0', 'tiff', `${englishName} (climbing image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'climb.1', 'tiff', `${englishName} (climbing image #2)`,),
    ],)
}
