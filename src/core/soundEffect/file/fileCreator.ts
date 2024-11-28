import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {PossibleEnglishName, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SMM1SoundEffectImageFile, SMM2SoundEffectImageFile}                          from 'core/soundEffect/file/SoundEffectImageFile'
import type {SMM1SoundEffectSoundFile, SMM2SoundEffectSoundFile}                          from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleSoundEffectSoundName_SMM1, PossibleSoundEffectSoundName_SMM2}        from 'core/soundEffect/sound/types'

import {SimpleImageFile}                         from 'util/file/image/SimpleImageFile'
import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

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

/**
 * Create a {@link SMM2SoundEffectImageFile} from the {@link imageName} provided
 *
 * @param englishName The {@link SoundEffects} {@link SoundEffects.englishName english name}
 * @param imageName The {@link SMM2} image numbers
 */
export function smm2ImageFile(englishName: PossibleEnglishName, imageName: SoundEffectImageName_SMM2,): SMM2SoundEffectImageFile {
    return new SimpleImageFile('sound effect', `Lyt_E_P_SE_${imageName}`, 'tiff', englishName,)
}


/**
 * Create a {@link SMM1SoundEffectSoundFile} from a {@link name} provided
 *
 * @param name The name of the sound file
 */
export function smm1SoundFile<const NAME extends PossibleSoundEffectSoundName_SMM1, >(name: NAME,): SMM1SoundEffectSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('sound/sound effect/SMM1', name, 'wav',)
}

/**
 * Create an {@link ReadonlyArray array} of one {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1,): readonly [SMM1SoundEffectSoundFile<NAME1>,]
/**
 * Create an {@link ReadonlyArray array} of two {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, const NAME2 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1, name2: NAME2,): readonly [SMM1SoundEffectSoundFile<NAME1>, SMM1SoundEffectSoundFile<NAME2>,]
/**
 * Create an {@link ReadonlyArray array} of three {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, const NAME2 extends PossibleSoundEffectSoundName_SMM1, const NAME3 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1, name2: NAME2, name3: NAME3,): readonly [SMM1SoundEffectSoundFile<NAME1>, SMM1SoundEffectSoundFile<NAME2>, SMM1SoundEffectSoundFile<NAME3>,]
/**
 * Create an {@link ReadonlyArray array} of four {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, const NAME2 extends PossibleSoundEffectSoundName_SMM1, const NAME3 extends PossibleSoundEffectSoundName_SMM1, const NAME4 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4,): readonly [SMM1SoundEffectSoundFile<NAME1>, SMM1SoundEffectSoundFile<NAME2>, SMM1SoundEffectSoundFile<NAME3>, SMM1SoundEffectSoundFile<NAME4>,]
/**
 * Create an {@link ReadonlyArray array} of five {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, const NAME2 extends PossibleSoundEffectSoundName_SMM1, const NAME3 extends PossibleSoundEffectSoundName_SMM1, const NAME4 extends PossibleSoundEffectSoundName_SMM1, const NAME5 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5,): readonly [SMM1SoundEffectSoundFile<NAME1>, SMM1SoundEffectSoundFile<NAME2>, SMM1SoundEffectSoundFile<NAME3>, SMM1SoundEffectSoundFile<NAME4>, SMM1SoundEffectSoundFile<NAME5>,]
/**
 * Create an {@link ReadonlyArray array} of six {@link SMM1SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 * @param name6 The sixth sound file name
 */
export function smm1SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM1, const NAME2 extends PossibleSoundEffectSoundName_SMM1, const NAME3 extends PossibleSoundEffectSoundName_SMM1, const NAME4 extends PossibleSoundEffectSoundName_SMM1, const NAME5 extends PossibleSoundEffectSoundName_SMM1, const NAME6 extends PossibleSoundEffectSoundName_SMM1, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5, name6: NAME6,): readonly [SMM1SoundEffectSoundFile<NAME1>, SMM1SoundEffectSoundFile<NAME2>, SMM1SoundEffectSoundFile<NAME3>, SMM1SoundEffectSoundFile<NAME4>, SMM1SoundEffectSoundFile<NAME5>, SMM1SoundEffectSoundFile<NAME6>,]
export function smm1SoundFiles(...names: Array<PossibleSoundEffectSoundName_SMM1>): Array<SMM1SoundEffectSoundFile> {
    const files = new Array<SMM1SoundEffectSoundFile>(names.length,)
    forEachByArray(names, (it, i,) => files[i] = smm1SoundFile(it,),)
    return files
}

/**
 * Create a {@link SMM2SoundEffectSoundFile} from a {@link name} provided
 *
 * @param name The name of the sound file
 */
export function smm2SoundFile<const NAME extends PossibleSoundEffectSoundName_SMM2, >(name: NAME,): SMM2SoundEffectSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('sound/sound effect/SMM2', name, 'wav',)
}

/**
 * Create an {@link ReadonlyArray array} of one {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1,): readonly [SMM2SoundEffectSoundFile<NAME1>,]
/**
 * Create an {@link ReadonlyArray array} of two {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>,]
/**
 * Create an {@link ReadonlyArray array} of three {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>,]
/**
 * Create an {@link ReadonlyArray array} of four {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, const NAME4 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>, SMM2SoundEffectSoundFile<NAME4>,]
/**
 * Create an {@link ReadonlyArray array} of five {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, const NAME4 extends PossibleSoundEffectSoundName_SMM2, const NAME5 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>, SMM2SoundEffectSoundFile<NAME4>, SMM2SoundEffectSoundFile<NAME5>,]
/**
 * Create an {@link ReadonlyArray array} of six {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 * @param name6 The sixth sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, const NAME4 extends PossibleSoundEffectSoundName_SMM2, const NAME5 extends PossibleSoundEffectSoundName_SMM2, const NAME6 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5, name6: NAME6,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>, SMM2SoundEffectSoundFile<NAME4>, SMM2SoundEffectSoundFile<NAME5>, SMM2SoundEffectSoundFile<NAME6>,]
/**
 * Create an {@link ReadonlyArray array} of eight {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 * @param name6 The sixth sound file name
 * @param name7 The seventh sound file name
 * @param name8 The eighth sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, const NAME4 extends PossibleSoundEffectSoundName_SMM2, const NAME5 extends PossibleSoundEffectSoundName_SMM2, const NAME6 extends PossibleSoundEffectSoundName_SMM2, const NAME7 extends PossibleSoundEffectSoundName_SMM2, const NAME8 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5, name6: NAME6, name7: NAME7, name8: NAME8,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>, SMM2SoundEffectSoundFile<NAME4>, SMM2SoundEffectSoundFile<NAME5>, SMM2SoundEffectSoundFile<NAME6>, SMM2SoundEffectSoundFile<NAME7>, SMM2SoundEffectSoundFile<NAME8>,]
/**
 * Create an {@link ReadonlyArray array} of nine {@link SMM2SoundEffectSoundFile}
 *
 * @param name1 The first sound file name
 * @param name2 The second sound file name
 * @param name3 The third sound file name
 * @param name4 The four sound file name
 * @param name5 The fifth sound file name
 * @param name6 The sixth sound file name
 * @param name7 The seventh sound file name
 * @param name8 The eighth sound file name
 * @param name9 The ninth sound file name
 */
export function smm2SoundFiles<const NAME1 extends PossibleSoundEffectSoundName_SMM2, const NAME2 extends PossibleSoundEffectSoundName_SMM2, const NAME3 extends PossibleSoundEffectSoundName_SMM2, const NAME4 extends PossibleSoundEffectSoundName_SMM2, const NAME5 extends PossibleSoundEffectSoundName_SMM2, const NAME6 extends PossibleSoundEffectSoundName_SMM2, const NAME7 extends PossibleSoundEffectSoundName_SMM2, const NAME8 extends PossibleSoundEffectSoundName_SMM2, const NAME9 extends PossibleSoundEffectSoundName_SMM2, >(name1: NAME1, name2: NAME2, name3: NAME3, name4: NAME4, name5: NAME5, name6: NAME6, name7: NAME7, name8: NAME8, name9: NAME9,): readonly [SMM2SoundEffectSoundFile<NAME1>, SMM2SoundEffectSoundFile<NAME2>, SMM2SoundEffectSoundFile<NAME3>, SMM2SoundEffectSoundFile<NAME4>, SMM2SoundEffectSoundFile<NAME5>, SMM2SoundEffectSoundFile<NAME6>, SMM2SoundEffectSoundFile<NAME7>, SMM2SoundEffectSoundFile<NAME8>, SMM2SoundEffectSoundFile<NAME9>,]
export function smm2SoundFiles(...names: Array<PossibleSoundEffectSoundName_SMM2>): Array<SMM2SoundEffectSoundFile> {
    const files = new Array<SMM2SoundEffectSoundFile>(names.length,)
    forEachByArray(names, (it, i,) => files[i] = smm2SoundFile(it,),)
    return files
}
