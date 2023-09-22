import type {MiiCostumeImageFile, PossibleImageFileName} from 'core/miiCostume/file/MiiCostumeImageFile'
import type {PossibleEnglishName}                        from 'core/miiCostume/MiiCostumes.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a simple {@link MiiCostumeImageFile} from a {@link name} provided
 *
 * @param name The image name
 * @param englishName The {@link MiiCostumes} {@link MiiCostumes.englishName english name}
 */
export function miiCostumeImage(name: PossibleImageFileName, englishName: PossibleEnglishName,): MiiCostumeImageFile {
    return new SimpleImageFile('Mii costume', name, 'tiff', englishName,)
}
