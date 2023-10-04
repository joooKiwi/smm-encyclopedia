import type {PossibleEnglishName, PossibleImageName} from 'core/medal/Medals.types'
import type {MedalImageFile}                         from 'core/medal/file/MedalImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a simple {@link MedalImageFile} from a {@link name} prpvided
 *
 * @param name The file name
 * @param commonName The fallback name
 */
export function medalImage(name: PossibleImageName, commonName: PossibleEnglishName,): MedalImageFile {
    return new SimpleImageFile('medal', name, 'tiff', commonName,)
}
