import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {RunningImageFile}    from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

/** Create 3 running images */
export function runningImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<RunningImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.0`, 'tiff', `${englishName} (running image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.1`, 'tiff', `${englishName} (running image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.2`, 'tiff', `${englishName} (running image #3)`,),
    ],)
}
