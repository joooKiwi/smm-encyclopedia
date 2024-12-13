import type {CollectionHolder} from '@joookiwi/collection'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {JumpImageFile}       from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {SimpleImageFile}   from 'util/file/image/SimpleImageFile'

export function singleJumpImages<const IMAGE_FILE extends string, >(englishName: PossibleEnglishName, name: IMAGE_FILE,): CollectionHolder<JumpImageFile<IMAGE_FILE>> {
    return new ArrayAsCollection([new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.0`, 'tiff', `${englishName} (jump image #1)`,),],)
}
