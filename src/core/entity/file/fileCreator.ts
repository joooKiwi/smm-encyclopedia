import type {ClassWithEnglishName}                                                                                            from 'core/ClassWithEnglishName'
import type {EditorEntityImages}                                                                                              from 'core/entity/EditorEntityImages'
import type {PossibleEnglishName}                                                                                             from 'core/entity/Entities.types'
import type {InGameEntityImages}                                                                                              from 'core/entity/InGameEntityImages'
import type {GenericEditorImageFile, ImageName_Editor, ImageName_Editor_PowerUp, PowerUpEditorImageFile}                      from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile, UnusedImageFile, UnusedSmm1ImageFile_BigMushroom}                                       from 'core/entity/file/EntityImageFile'
import type {ImageName_SMM2, InGameSMM1ImageFile, InGameSMM2ImageFile, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1} from 'core/entity/file/EntityImageFile.inGame'
import type {GameStyles}                                                                                                      from 'core/gameStyle/GameStyles'

import {SimpleImageFile}        from 'util/file/image/SimpleImageFile'
import {PossibleAcronym_InFile} from 'core/gameStyle/GameStyles.types'

//region -------------------- Editor image --------------------

/**
 * Create a simple {@link GenericEditorImageFile}
 *
 * @param entity The entity to retrieve its name
 * @param name The image name
 * @param gameStyle The image {@link GameStyles}
 */
export function editorImage(entity: EditorEntityImages, name: ImageName_Editor, gameStyle: GameStyles,): GenericEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.acronymInFile}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym})`,)
}

//region -------------------- Editor image (power-up) --------------------

/**
 * Create a simple {@link PowerUpEditorImageFile} from the values provided
 * labelled as "with mushroom"
 *
 * @param entity The entity to retrieve its name
 * @param name The image file name
 * @param gameStyle The image {@link GameStyles}
 */
export function standalonePowerUpEditorImage(entity: EditorEntityImages, name: ImageName_Editor_PowerUp, gameStyle: GameStyles,): PowerUpEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.acronymInFile}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym} standalone)`,)
}

/**
 * Create a simple {@link PowerUpEditorImageFile} from the values provided
 * labelled as "standalone"
 *
 * @param entity The entity to retrieve its name
 * @param name The image file name
 * @param gameStyle The image {@link GameStyles}
 */
export function withMushroomPowerUpEditorImage(entity: EditorEntityImages, name: ImageName_Editor_PowerUp, gameStyle: GameStyles,): PowerUpEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.acronymInFile}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym} with mushroom)`,)
}

/**
 * Get both standalone and "with mushroom" {@link PowerUpEditorImageFile} from the values provided
 *
 * @param entity The entity to retrieve its name
 * @param standaloneName The image name that is standalone
 * @param nameWithMushroom The image name that is with a {@link Entities.SUPER_MUSHROOM mushroom}
 * @param gameStyle The images {@link GameStyles}
 * @see standalonePowerUpEditorImage
 * @see withMushroomPowerUpEditorImage
 */
export function powerUpEditorImages(entity: EditorEntityImages, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp, gameStyle: GameStyles,): readonly [PowerUpEditorImageFile, PowerUpEditorImageFile,] {
    return [
        standalonePowerUpEditorImage(entity, standaloneName, gameStyle,),
        withMushroomPowerUpEditorImage(entity, nameWithMushroom, gameStyle,),
    ]
}

//endregion -------------------- Editor image (power-up) --------------------

//endregion -------------------- Editor image --------------------
//region -------------------- Clear condition image --------------------

/**
 * Create a simple {@link ClearConditionImageFile} from the {@link name} and {@link number} provided
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
 * Create a simple {@link InGameSMM1ImageFile} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param name The image folder name
 * @param gameStyle The image {@link GameStyles}
 */
export function inGameSMM1Image(entity: InGameEntityImages, name: SimpleImageName_SMM1, gameStyle: GameStyles,): InGameSMM1ImageFile {
    return new SimpleImageFile(`entity/${gameStyle.shortImagePath}/In game/SMM1/Item - ${name}/`, 'wait.0', 'png', `${entity.englishName} (In game - ${gameStyle.acronym} SMM1)`,)
}

/**
 * Create a simple {@link InGameSMM2ImageFile} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param name The image folder name
 * @param gameStyle The image {@link GameStyles}
 * @param fileName The file name
 */
export function inGameImage(entity: InGameEntityImages, name: ImageName_SMM2, gameStyle: GameStyles, fileName: PossibleInGameSMM2ImageFileName,): InGameSMM2ImageFile {
    return new SimpleImageFile(`entity/in game/${gameStyle.acronymInFile} ${name}`, fileName, 'tiff', `${entity.englishName} (In game - ${gameStyle.acronym} SMM2)`,)
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
