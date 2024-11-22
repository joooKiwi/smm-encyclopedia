import type {PossibleImageNumber, SoundEffectCategoryImageFile} from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'
import type {PossibleEnglishName}                               from 'core/soundEffectCategory/SoundEffectCategories.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link SoundEffectCategoryImageFile} from a {@link name} provided
 *
 * @param number      The image number
 * @param englishName The fallback name
 */
export function soundEffectCategoryImage<const NUMBER extends PossibleImageNumber, >(number: NUMBER, englishName: PossibleEnglishName,): SoundEffectCategoryImageFile<NUMBER> {
    return new SimpleImageFile('category', `Category_Icon_0${number}^s`, 'tiff', englishName,)
}
