import type {SoundEffectCategoryImageFile}           from 'core/soundEffectCategory/file/SoundEffectCategoryImageFile'
import type {PossibleEnglishName, PossibleImageName} from 'core/soundEffectCategory/SoundEffectCategories.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link SoundEffectCategoryImageFile} from a {@link name} provided
 *
 * @param name The file name
 * @param englishName The fallback name
 */
export function soundEffectCategoryImage(name: PossibleImageName, englishName: PossibleEnglishName,): SoundEffectCategoryImageFile {
    return new SimpleImageFile('category', `${name}^s`, 'tiff', englishName,)
}
