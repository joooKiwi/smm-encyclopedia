import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {GoalPoleImageFile}   from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

/** Create 2 goal pole images */
export function goalPoleImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<GoalPoleImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `pole.0`, 'tiff', `${englishName} (goal pole image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `pole.1`, 'tiff', `${englishName} (goal pole image #2)`,),
    ],)
}
