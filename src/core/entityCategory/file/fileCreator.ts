import type {PossibleEnglishName}                          from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a simple {@link EntityCategoryImageFile} from a {@link number} provided
 *
 * @param number The image name
 * @param englishName The {@link EntityCategories} {@link EntityCategories.englishName english name}
 */
export function entityCategoryImage(number: PossibleImageNumber, englishName: PossibleEnglishName,): EntityCategoryImageFile {
    return new SimpleImageFile('category', `CategoryIcon_0${number}^s`, 'tiff', englishName,)
}
