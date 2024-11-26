import type {PossibleEnglishName}                              from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {MiiCostumeCategoryImageFile, PossibleImageNumber} from 'core/miiCostumeCategory/file/MiiCostumeCategoryImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link MiiCostumeCategoryImageFile} from the {@link number} provided
 *
 * @param number The image number
 * @param englishName The {@link MiiCostumeCategories} {@link MiiCostumeCategories.englishName english name}
 */
export function miiCostumeCategoryImage(number: PossibleImageNumber, englishName: PossibleEnglishName,): MiiCostumeCategoryImageFile {
    return new SimpleImageFile('category', `DressIcon_0${number}^s`, 'tiff', englishName,)
}
