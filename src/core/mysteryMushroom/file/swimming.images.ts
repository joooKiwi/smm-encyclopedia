import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {SwimmingImageFile}   from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

/** Create 6 swimming images */
export function swimmingImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<SwimmingImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.0`, 'tiff', `${englishName} (swimming image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.1`, 'tiff', `${englishName} (swimming image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.2`, 'tiff', `${englishName} (swimming image #3)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.3`, 'tiff', `${englishName} (swimming image #4)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.4`, 'tiff', `${englishName} (swimming image #5)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.5`, 'tiff', `${englishName} (swimming image #6)`,),
    ],)
}
