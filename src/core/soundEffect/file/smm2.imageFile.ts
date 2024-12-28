import type {PossibleEnglishName, SoundEffectImageName_SMM2} from 'core/soundEffect/SoundEffects.types'
import type {SMM2SoundEffectImageFile}                       from 'core/soundEffect/file/SoundEffectImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create a {@link SMM2SoundEffectImageFile} from the {@link imageName} provided
 *
 * @param englishName The {@link SoundEffects} {@link SoundEffects.englishName english name}
 * @param imageName The {@link SMM2} image numbers
 */
export function smm2ImageFile(englishName: PossibleEnglishName, imageName: SoundEffectImageName_SMM2,): SMM2SoundEffectImageFile {
    return new SimpleImageFile('sound effect', `Lyt_E_P_SE_${imageName}`, 'tiff', englishName,)
}
