import type {CollectionHolder}   from '@joookiwi/collection'
import {ArrayAsCollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {WalkImageFile}       from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/** Create 3 walking images */
export function walkImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<WalkImageFile<IMAGE_FILE>> {
    return new ArrayAsCollectionHolder([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.0`, 'tiff', `${englishName} (walk image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.1`, 'tiff', `${englishName} (walk image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.2`, 'tiff', `${englishName} (walk image #3)`,),
    ],)
}
