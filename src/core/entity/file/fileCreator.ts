import type {ClassWithEnglishName}                                                                                            from 'core/ClassWithEnglishName'
import type {PossibleEnglishName}                                                                                             from 'core/entity/Entities.types'
import type {InGameEntityImages}                                                                                              from 'core/entity/InGameEntityImages'
import type {ClearConditionImageFile, EditorImageFile, UnusedImageFile, UnusedSmm1ImageFile_BigMushroom}                      from 'core/entity/file/EntityImageFile'
import type {ImageName_SMM2, InGameSMM1ImageFile, InGameSMM2ImageFile, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1} from 'core/entity/file/EntityImageFile.inGame'
import type {GameStyles}                                                                                                      from 'core/gameStyle/GameStyles'
import type {PossibleAcronym_InFile}                                                                                          from 'core/gameStyle/GameStyles.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

//region -------------------- Editor image --------------------

/**
 * Create a {@link EditorImageFile} from the {@link name} and {@link gameStyle} provided
 *
 * @param entity The entity to retrieve its name
 * @param name The image name
 * @param gameStyle The image {@link GameStyles}
 */
export function editorImage<const GAME_STYLE extends GameStyles, const FILE_NAME extends string, NAME extends PossibleEnglishName, >(entity: ClassWithEnglishName<NAME>, name: FILE_NAME, gameStyle: GAME_STYLE,): EditorImageFile<GAME_STYLE, FILE_NAME, NAME> {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.acronymInFile}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (editor)`,)
}

//endregion -------------------- Editor image --------------------
//region -------------------- Clear condition image --------------------

/**
 * Create a {@link ClearConditionImageFile}
 *
 * @param entity The entity to retrieve its name
 * @param name The ending file name
 * @param gameStyleAcronym The image {@link GameStyles} acronym
 */
export function clearConditionImage<const GAME_STYLE_ACRONYM extends PossibleAcronym_InFile = PossibleAcronym_InFile, const FILE_NAME extends string = string, const NAME extends PossibleEnglishName = PossibleEnglishName, >(entity: ClassWithEnglishName<NAME>, name: FILE_NAME, gameStyleAcronym: GAME_STYLE_ACRONYM,): ClearConditionImageFile<GAME_STYLE_ACRONYM, FILE_NAME, NAME> {
    return new SimpleImageFile(`entity/clear condition/`, `${gameStyleAcronym}_Lyt_M_${name}`, 'tiff', `${entity.englishName} (clear condition)`,)
}

//endregion -------------------- Clear condition image --------------------
//region -------------------- In game image --------------------

/**
 * Create a {@link InGameImageFile} from the {@link folderName} and {@link fileName} provided
 *
 * @param entity The entity to retrieve its name
 * @param folderName The folder name
 * @param fileName The file name
 */
export function inGameImage<const FOLDER_NAME extends string, const FILE_NAME extends string, const NAME extends PossibleEnglishName, >(entity: ClassWithEnglishName<NAME>, folderName: FOLDER_NAME, fileName: FILE_NAME,): InGameImageFile<FOLDER_NAME, FILE_NAME, NAME> {
    return new SimpleImageFile(`entity/in game/${folderName}`, fileName, 'tiff', `${entity.englishName} (in game)`,)
}

//endregion -------------------- In game image --------------------
//region -------------------- Unused image --------------------

/**
 * Create a {@link UnusedImageFile} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param folderName The folder name
 * @param fileName The file name
 */
export function unusedImage<const FOLDER_NAME extends string, const FILE_NAME extends string, const NAME extends PossibleEnglishName, >(entity: ClassWithEnglishName<NAME>, folderName: FOLDER_NAME, fileName: FILE_NAME,): UnusedImageFile<FOLDER_NAME, FILE_NAME, NAME> {
    return new SimpleImageFile(`entity/unused/${folderName}`, fileName, 'tiff', `${entity.englishName} (unused)`,)
}

/**
 * Create a {@link UnusedSmm1ImageFile_BigMushroom} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param folderName The folder name
 * @param fileName The file name
 */
export function unusedBigMushroomImage<const FOLDER_NAME extends string, const FILE_NAME extends string, const NAME extends PossibleEnglishName, >(entity: ClassWithEnglishName<NAME>, folderName: FOLDER_NAME, fileName: FILE_NAME,): UnusedSmm1ImageFile_BigMushroom<FOLDER_NAME, FILE_NAME, NAME> {
    return new SimpleImageFile(`entity/unused/M1 A - Enemy - ${folderName}`, fileName, 'tiff', `${entity.englishName} (unused Big Mushroom)`,)
}

//endregion -------------------- Unused image --------------------
