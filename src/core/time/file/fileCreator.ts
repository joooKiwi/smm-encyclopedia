import type {PossibleEnglishName, PossibleSimpleImagePath} from 'core/time/Times.types'
import type {TimeImageFile}                                from 'core/time/file/TimeImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link TimeImageFile} by a {@link PossibleSimpleImagePath} provided
 *
 * @param name The image name
 * @param englishName The fallback name
 */
export function timeImage(name: PossibleSimpleImagePath, englishName: PossibleEnglishName,): TimeImageFile {
    return new SimpleImageFile('time', name, 'png', englishName,)
}
