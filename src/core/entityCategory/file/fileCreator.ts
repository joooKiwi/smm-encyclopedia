import type {PossibleEnglishName}                          from 'core/entityCategory/EntityCategories.types'
import type {EntityCategoryImageFile, PossibleImageNumber} from 'core/entityCategory/file/EntityCategoryImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create an {@link EntityCategoryImageFile} from a {@link number} provided
 *
 * @param number The image name
 * @param englishName The {@link EntityCategories} {@link EntityCategories.englishName english name}
 */
export function entityCategoryImage<const NUMBER extends PossibleImageNumber,>(number: NUMBER, englishName: PossibleEnglishName,): EntityCategoryImageFile<NUMBER> {
    return new SimpleImageFile('category', `CategoryIcon_0${number}^s`, 'tiff', englishName,)
}
