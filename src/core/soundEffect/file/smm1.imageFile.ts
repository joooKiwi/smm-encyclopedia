import type {PossibleEnglishName, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SMM1SoundEffectImageFile}                         from 'core/soundEffect/file/SoundEffectImageFile'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

/**
 * Create an {@link ReadonlyArray array} of {@link SMM1SoundEffectImageFile} from the {@link imageNumbers} provided
 *
 * @param englishName The {@link SoundEffects} {@link SoundEffects.englishName english name}
 * @param imageNumbers The {@link SMM1} image numbers
 */
export function smm1ImageFiles(englishName: PossibleEnglishName, imageNumbers: | SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,],): readonly [SMM1SoundEffectImageFile,] | readonly [SMM1SoundEffectImageFile, SMM1SoundEffectImageFile,] {
    if (typeof imageNumbers == 'string')
        return [new SimpleImageFile('sound effect', `Edit_Lyt_P_SE${imageNumbers}`, 'tiff', englishName,),]
    return [new SimpleImageFile('sound effect', `Edit_Lyt_P_SE${imageNumbers[0]}`, 'tiff', englishName,), new SimpleImageFile('sound effect', `Edit_Lyt_P_SE${imageNumbers[1]}`, 'tiff', englishName,),] as const
}
