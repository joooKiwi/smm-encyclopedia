import type {Entities}                                                                                                                                                                             from 'core/entity/Entities'
import type {GenericEditorImageFile, ImageName_Editor, ImageName_Editor_PowerUp, PowerUpEditorImageFile}                                                                                           from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile, ImageName_ClearCondition}                                                                                                                                    from 'core/entity/file/EntityImageFile.clearCondition'
import type {ImageName_SMM2, InGameSMM1ImageFile, InGameSMM2ImageFile, PossibleInGameSMM2ImageFileName, SimpleImageName_SMM1}                                                                      from 'core/entity/file/EntityImageFile.inGame'
import type {ImageName_Unused_SMM1, ImageName_UnusedBigMushroom, ImageName_UnusedSMM1Regular, SimpleImageName_BigMushroom_Unused_SMM1, UnusedSMM1BigMushroomImageFile, UnusedSMM1RegularImageFile} from 'core/entity/file/EntityImageFile.unused'
import type {GameStyles}                                                                                                                                                                           from 'core/gameStyle/GameStyles'
import type {PossibleGameAcronym_SMM1}                                                                                                                                                             from 'core/gameStyle/GameStyles.types'

import {SimpleImageFile} from 'util/file/image/SimpleImageFile'

//region -------------------- Editor image --------------------

/**
 * Create a simple {@link GenericEditorImageFile}
 *
 * @param entity The entity to retrieve its name
 * @param name The image name
 * @param gameStyle The image {@link GameStyles}
 */
export function editorImage(entity: Entities, name: ImageName_Editor, gameStyle: GameStyles,): GenericEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.gameAcronym}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym})`,)
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
export function standalonePowerUpEditorImage(entity: Entities, name: ImageName_Editor_PowerUp, gameStyle: GameStyles,): PowerUpEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.gameAcronym}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym} standalone)`,)
}

/**
 * Create a simple {@link PowerUpEditorImageFile} from the values provided
 * labelled as "standalone"
 *
 * @param entity The entity to retrieve its name
 * @param name The image file name
 * @param gameStyle The image {@link GameStyles}
 */
export function withMushroomPowerUpEditorImage(entity: Entities, name: ImageName_Editor_PowerUp, gameStyle: GameStyles,): PowerUpEditorImageFile {
    return new SimpleImageFile(`entity/editor`, `${gameStyle.gameAcronym}_Lyt_P_${name}`, 'tiff', `${entity.englishName} (Editor ${gameStyle.acronym} with mushroom)`,)
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
export function powerUpEditorImages(entity: Entities, standaloneName: ImageName_Editor_PowerUp, nameWithMushroom: ImageName_Editor_PowerUp, gameStyle: GameStyles,): readonly [PowerUpEditorImageFile, PowerUpEditorImageFile,] {
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
 * @param gameStyle The image {@link GameStyles}
 */
export function clearConditionImage(entity: Entities, name: ImageName_ClearCondition, gameStyle: GameStyles,): ClearConditionImageFile {
    return new SimpleImageFile(`entity/clear condition/`, `${gameStyle.gameAcronym}_Lyt_M_${name}`, 'tiff', `${entity.englishName} (Clear condition)`,)
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
export function inGameSMM1Image(entity: Entities, name: SimpleImageName_SMM1, gameStyle: GameStyles,): InGameSMM1ImageFile {
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
export function inGameImage(entity: Entities, name: ImageName_SMM2, gameStyle: GameStyles, fileName: PossibleInGameSMM2ImageFileName,): InGameSMM2ImageFile {
    return new SimpleImageFile(`entity/in game/${gameStyle.gameAcronym} ${name}`, fileName, 'tiff', `${entity.englishName} (In game - ${gameStyle.acronym} SMM2)`,)
}

//endregion -------------------- In game image --------------------
//region -------------------- Unused image --------------------

/**
 * Create a simple {@link UnusedSMM1RegularImageFile} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param name The image folder name
 * @param gameStyle The image {@link GameStyles}
 * @param fileName The file name
 */
export function unusedSmm1RegularImage(entity: Entities, name: ImageName_Unused_SMM1, gameStyle: GameStyles, fileName: ImageName_UnusedSMM1Regular,): UnusedSMM1RegularImageFile {
    return new SimpleImageFile(`entity/unused/${gameStyle.gameAcronym as PossibleGameAcronym_SMM1} - ${name}`, fileName, 'tiff', `${entity.englishName} (Unused)`,)
}

/**
 * Create a simple {@link UnusedSMM1BigMushroomImageFile} from the {@link name} provided
 *
 * @param entity The entity to retrieve its name
 * @param name The image folder name
 * @param fileName The file name
 */
export function unusedBigMushroomImage(entity: Entities, name: SimpleImageName_BigMushroom_Unused_SMM1, fileName: ImageName_UnusedBigMushroom,): UnusedSMM1BigMushroomImageFile {
    return new SimpleImageFile(`entity/unused/M1 A - Enemy - ${name}`, fileName, 'tiff', `${entity.englishName} (Unused Big Mushroom)`,)
}

//endregion -------------------- Unused image --------------------
